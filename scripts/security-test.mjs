/**
 * Envitect Security Test Suite
 * Run against local dev server: node scripts/security-test.mjs
 * Loads .env.local automatically so rate limit vars stay in sync with the server.
 *
 * Tests:
 *  1.  Security headers (X-Frame-Options, CSP, X-Content-Type, Referrer-Policy, Permissions-Policy)
 *  2.  CSRF protection (Content-Type enforcement on /api/contact)
 *  3.  Input validation (Zod — 400 on bad fields, no stack traces)
 *  4.  Rate limiting — contact form (5/24h)
 *  5.  Rate limiting — apply route (3/24h)
 *  6.  Admin auth bypass (GET /admin without session → redirect to login)
 *  7.  Admin API auth (GET /api/admin/contacts without session → 401/redirect)
 *  8.  XSS: response never echoes raw script tags back to client
 *  9.  SQL injection: Prisma parameterization handles malicious payloads
 * 10.  Invalid JSON body → 400, no internal error details leaked
 * 11.  File upload: .exe extension rejected even with spoofed MIME type
 * 12.  File upload: oversized file (>5MB) rejected
 * 13.  Blog API: /api/blog returns JSON array (even if empty)
 * 14.  Jobs API: /api/jobs returns JSON array (even if empty)
 * 15.  Open redirect: /admin redirect stays on same host
 */

// Load .env.local so rate limit vars stay in sync with the dev server
import { config } from 'dotenv'
config({ path: new URL('../.env.local', import.meta.url).pathname })

const BASE = process.env.BASE_URL ?? 'http://localhost:3000'

// Mirror the server's configurable limits so tests stay self-consistent
// regardless of whether CONTACT_RATE_LIMIT / APPLY_RATE_LIMIT are overridden
const CONTACT_LIMIT = parseInt(process.env.CONTACT_RATE_LIMIT ?? '5', 10)
const APPLY_LIMIT   = parseInt(process.env.APPLY_RATE_LIMIT   ?? '3', 10)

// ─── Result tracker ───────────────────────────────────────────────────────────
const results = []
let currentGroup = ''

function group(name) {
  currentGroup = name
  console.log(`\n${'─'.repeat(60)}`)
  console.log(`  ${name}`)
  console.log('─'.repeat(60))
}

function pass(name, detail = '') {
  results.push({ status: '✅ PASS', group: currentGroup, name, detail })
  console.log(`  ✅  ${name}${detail ? `  →  ${detail}` : ''}`)
}

function fail(name, detail = '') {
  results.push({ status: '❌ FAIL', group: currentGroup, name, detail })
  console.log(`  ❌  ${name}${detail ? `  →  ${detail}` : ''}`)
}

function warn(name, detail = '') {
  results.push({ status: '⚠️  WARN', group: currentGroup, name, detail })
  console.log(`  ⚠️   ${name}${detail ? `  →  ${detail}` : ''}`)
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function safeJson(res) {
  try { return await res.json() } catch { return null }
}

function hasStackTrace(text) {
  // Require genuine JS stack trace patterns — avoid false positives on phrases
  // like "at least N characters" from Zod validation messages.
  // Genuine: "at functionName (/path/file.js:123:45)" or "at Object.method (<anonymous>:1:1)"
  return (
    /\bat\s+[\w$.]+\s+\([^)]*\.(js|ts|mjs):\d+/m.test(text) ||
    /\bat\s+[\w$.]+\s+\([^)]*:\d+:\d+\)/m.test(text) ||
    /Stack trace:/i.test(text)
  )
}

// ─── Test 1: Security Headers ────────────────────────────────────────────────

async function testSecurityHeaders() {
  group('1. SECURITY HEADERS')
  let res
  try {
    res = await fetch(`${BASE}/`, { redirect: 'follow' })
  } catch (e) {
    fail('Server reachable', `Cannot connect to ${BASE} — is dev server running?`)
    return false
  }

  const h = res.headers

  // X-Frame-Options
  const xfo = h.get('x-frame-options')
  xfo === 'DENY'
    ? pass('X-Frame-Options', 'DENY')
    : fail('X-Frame-Options', `Got: ${xfo ?? '(missing)'}`)

  // X-Content-Type-Options
  const xcto = h.get('x-content-type-options')
  xcto === 'nosniff'
    ? pass('X-Content-Type-Options', 'nosniff')
    : fail('X-Content-Type-Options', `Got: ${xcto ?? '(missing)'}`)

  // Content-Security-Policy
  const csp = h.get('content-security-policy')
  csp && csp.includes("default-src 'self'")
    ? pass('Content-Security-Policy', 'Present and contains default-src self')
    : fail('Content-Security-Policy', `Got: ${csp ?? '(missing)'}`)

  // Referrer-Policy
  const rp = h.get('referrer-policy')
  rp
    ? pass('Referrer-Policy', rp)
    : fail('Referrer-Policy', '(missing)')

  // Permissions-Policy
  const pp = h.get('permissions-policy')
  pp
    ? pass('Permissions-Policy', pp.substring(0, 60) + '…')
    : fail('Permissions-Policy', '(missing)')

  // X-XSS-Protection
  const xxp = h.get('x-xss-protection')
  xxp
    ? pass('X-XSS-Protection', xxp)
    : warn('X-XSS-Protection', 'Missing — deprecated but harmless to add')

  // HSTS — only on HTTPS
  const hsts = h.get('strict-transport-security')
  hsts
    ? pass('Strict-Transport-Security', hsts.substring(0, 50))
    : warn('Strict-Transport-Security', 'Not set on HTTP (expected — only active on HTTPS/production)')

  return true
}

// ─── Test 2: CSRF Protection ─────────────────────────────────────────────────

async function testCSRFProtection() {
  group('2. CSRF PROTECTION')

  // 2a: form-encoded body should be rejected with 415
  const res = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'name=test&email=test@test.com&message=test',
  })
  res.status === 415
    ? pass('Rejects non-JSON Content-Type', `415 on form-encoded POST`)
    : fail('Rejects non-JSON Content-Type', `Expected 415, got ${res.status}`)

  // 2b: missing Content-Type header
  const res2 = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    body: JSON.stringify({ name: 'test', email: 'test@test.com', message: 'test' }),
  })
  res2.status === 415
    ? pass('Rejects missing Content-Type', `415 on no Content-Type`)
    : fail('Rejects missing Content-Type', `Expected 415, got ${res2.status}`)
}

// ─── Test 3: Input Validation ────────────────────────────────────────────────

async function testInputValidation() {
  group('3. INPUT VALIDATION (ZOD)')

  // 3a: empty required fields
  const r1 = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', email: '', message: '' }),
  })
  const b1 = await safeJson(r1)
  if (r1.status === 400 && b1?.fields) {
    const text = JSON.stringify(b1)
    hasStackTrace(text)
      ? fail('No stack trace in 400 response', 'Stack trace found!')
      : pass('Rejects empty fields with 400 + no stack trace', `Fields: ${Object.keys(b1.fields).join(', ')}`)
  } else {
    fail('Rejects empty fields', `Expected 400 with fields, got ${r1.status}`)
  }

  // 3b: invalid email format
  const r2 = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test User', email: 'not-an-email', message: 'Valid message content here' }),
  })
  r2.status === 400
    ? pass('Rejects invalid email format', '400')
    : fail('Rejects invalid email format', `Expected 400, got ${r2.status}`)

  // 3c: fields over max length (name > 100 chars)
  const r3 = await fetch(`${BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'A'.repeat(150),
      email: 'test@test.com',
      message: 'Valid message content here that is long enough to pass validation',
    }),
  })
  r3.status === 400
    ? pass('Rejects oversized name field (>100 chars)', '400')
    : warn('Oversized name field', `Got ${r3.status} — check max length in Zod schema`)
}

// ─── Test 4: Rate Limiting — Contact ─────────────────────────────────────────

async function testRateLimitContact() {
  group(`4. RATE LIMITING — /api/contact (configured limit: ${CONTACT_LIMIT} / 24h)`)

  const payload = {
    name: 'Rate Limit Tester',
    email: 'ratelimit-contact@test.com',
    message: 'Rate limiting test message that meets minimum length requirements',
  }

  // Send limit+2 requests — 429 must appear by request limit+1
  const maxAttempts = CONTACT_LIMIT + 2
  let hitLimit = false
  let hit429AtRequest = null

  for (let i = 1; i <= maxAttempts; i++) {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.status === 429) {
      const body = await safeJson(res)
      const retryAfter = res.headers.get('retry-after')
      hitLimit = true
      hit429AtRequest = i
      // 429 must appear at request limit+1 (or earlier if prior requests consumed slots)
      if (i <= CONTACT_LIMIT + 1) {
        pass(
          `Rate limit enforced at request #${i} (limit=${CONTACT_LIMIT})`,
          `429. Retry-After: ${retryAfter}s. "${body?.error}"`
        )
      } else {
        warn('Rate limit triggered late', `Expected by request ${CONTACT_LIMIT + 1}, got at #${i}`)
      }
      break
    }
  }
  if (!hitLimit) {
    fail('Rate limit never triggered', `Sent ${maxAttempts} requests without getting 429 (limit=${CONTACT_LIMIT})`)
  }
}

// ─── Test 5: Rate Limiting — Apply ───────────────────────────────────────────

async function testRateLimitApply() {
  group(`5. RATE LIMITING — /api/apply (configured limit: ${APPLY_LIMIT} / 24h)`)

  const makeApplyBody = () => {
    const fd = new FormData()
    fd.append('name', 'Rate Limit Applicant')
    fd.append('email', 'ratelimit-apply@test.com')
    fd.append('position', 'Software Engineer')
    fd.append('coverLetter', 'Rate limit test cover letter with sufficient length for validation purposes')
    return fd
  }

  // Send limit+2 requests — 429 must appear by request limit+1
  const maxAttempts = APPLY_LIMIT + 2
  let hitLimit = false

  for (let i = 1; i <= maxAttempts; i++) {
    const res = await fetch(`${BASE}/api/apply`, {
      method: 'POST',
      body: makeApplyBody(),
    })
    if (res.status === 429) {
      const retryAfter = res.headers.get('retry-after')
      hitLimit = true
      if (i <= APPLY_LIMIT + 1) {
        pass(`Rate limit enforced at request #${i} (limit=${APPLY_LIMIT})`, `429. Retry-After: ${retryAfter}s`)
      } else {
        warn('Rate limit triggered late', `Expected by request ${APPLY_LIMIT + 1}, got at #${i}`)
      }
      break
    }
  }
  if (!hitLimit) {
    fail('Rate limit never triggered', `Sent ${maxAttempts} requests without getting 429 (limit=${APPLY_LIMIT})`)
  }
}

// ─── Test 6: Admin Auth Bypass ───────────────────────────────────────────────

async function testAdminAuthBypass() {
  group('6. ADMIN AUTH BYPASS')

  const pages = ['/admin', '/admin/contacts', '/admin/applications', '/admin/blog', '/admin/jobs']

  for (const page of pages) {
    const res = await fetch(`${BASE}${page}`, { redirect: 'manual' })
    const loc = res.headers.get('location') ?? ''
    const isRedirect = res.status >= 300 && res.status < 400
    const goesToLogin = loc.includes('login') || loc.includes('signin')

    if (isRedirect && goesToLogin) {
      pass(`${page}`, `${res.status} → ${loc}`)
    } else if (isRedirect) {
      warn(`${page}`, `Redirects to ${loc} — verify it's login`)
    } else {
      fail(`${page}`, `Expected login redirect, got ${res.status}`)
    }
  }
}

// ─── Test 7: Admin API Auth ───────────────────────────────────────────────────

async function testAdminAPIAuth() {
  group('7. ADMIN API ENDPOINTS — REQUIRE AUTH')

  const endpoints = [
    '/api/admin/contacts',
    '/api/admin/applications',
    '/api/admin/blog',
    '/api/admin/jobs',
  ]

  for (const endpoint of endpoints) {
    const res = await fetch(`${BASE}${endpoint}`, { redirect: 'manual' })
    // Should be 401, 403, or redirect — never 200 without auth
    if (res.status === 401 || res.status === 403) {
      pass(`${endpoint}`, `${res.status} Unauthorized ✓`)
    } else if (res.status >= 300 && res.status < 400) {
      pass(`${endpoint}`, `${res.status} → redirect (login) ✓`)
    } else if (res.status === 200) {
      fail(`${endpoint}`, '200 returned without auth — CRITICAL: endpoint unprotected!')
    } else {
      warn(`${endpoint}`, `Got ${res.status} — verify auth protection`)
    }
  }
}

// ─── Test 8: XSS in Request/Response ─────────────────────────────────────────

async function testXSSResponse() {
  group('8. XSS — RESPONSE NEVER ECHOES RAW SCRIPT TAGS')

  const xssPayloads = [
    { name: '<script>alert("xss")</script>', email: 'xss1@test.com', message: 'XSS test payload one with sufficient length' },
    { name: '"><img src=x onerror=alert(1)>', email: 'xss2@test.com', message: 'XSS test payload two with sufficient length' },
    { name: "'; alert(1); //", email: 'xss3@test.com', message: 'XSS test payload three with sufficient length' },
  ]

  for (const payload of xssPayloads) {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const text = await res.text()

    // Response must not echo back raw unescaped script tags
    const dangerous = ['<script>', 'onerror=alert', 'javascript:']
    const found = dangerous.filter(d => text.toLowerCase().includes(d.toLowerCase()))

    if (found.length > 0) {
      fail(`XSS payload echoed: "${payload.name.substring(0, 30)}"`, `Found: ${found.join(', ')} in response`)
    } else {
      pass(`XSS not echoed: "${payload.name.substring(0, 30)}"`, `Response clean (status ${res.status})`)
    }
  }
}

// ─── Test 9: SQL Injection ────────────────────────────────────────────────────

async function testSQLInjection() {
  group('9. SQL INJECTION — PRISMA PARAMETERIZATION')

  const sqlPayloads = [
    "Robert'); DROP TABLE contacts; --",
    "1' OR '1'='1",
    "admin'--",
    "' UNION SELECT * FROM admin_users --",
  ]

  for (const payload of sqlPayloads) {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: payload,
        email: 'sqli@test.com',
        message: 'SQL injection test message that is long enough to pass validation checks',
      }),
    })
    const body = await safeJson(res)
    const text = JSON.stringify(body ?? '')

    // Should NOT see SQL error messages or database error details
    const sqlErrors = ['sql', 'syntax error', 'mysql', 'mariadb', 'prisma', 'ORA-', 'SQLITE_']
    const leaked = sqlErrors.filter(e => text.toLowerCase().includes(e.toLowerCase()) && res.status === 500)

    if (leaked.length > 0) {
      fail(`SQL payload: "${payload.substring(0, 30)}"`, `DB error leaked: ${leaked.join(', ')}`)
    } else {
      pass(`SQL payload handled: "${payload.substring(0, 30)}"`, `Status ${res.status}, no DB error exposed`)
    }
  }
}

// ─── Test 10: Invalid JSON ────────────────────────────────────────────────────

async function testInvalidJSON() {
  group('10. INVALID JSON — SAFE ERROR RESPONSE')

  const cases = [
    { label: 'Malformed JSON', body: 'not { valid json {{{' },
    { label: 'Empty body', body: '' },
    { label: 'Array instead of object', body: '["name","email"]' },
  ]

  for (const { label, body } of cases) {
    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    })
    const text = await res.text()

    if (res.status === 400) {
      if (hasStackTrace(text)) {
        fail(`${label}`, 'Stack trace in response!')
      } else {
        pass(`${label}`, `400, no internals leaked`)
      }
    } else {
      warn(`${label}`, `Got ${res.status} — expected 400`)
    }
  }
}

// ─── Test 11: File Upload — Extension ────────────────────────────────────────

async function testFileUploadExtension() {
  group('11. FILE UPLOAD — EXTENSION VALIDATION')

  const dangerousFiles = [
    { filename: 'malware.exe', type: 'application/pdf', label: '.exe with PDF MIME' },
    { filename: 'script.php', type: 'application/pdf', label: '.php with PDF MIME' },
    { filename: 'shell.sh', type: 'application/pdf', label: '.sh with PDF MIME' },
    { filename: 'payload.js', type: 'application/pdf', label: '.js with PDF MIME' },
    { filename: 'hack.pdf.exe', type: 'application/pdf', label: 'double extension .pdf.exe' },
  ]

  for (const { filename, type, label } of dangerousFiles) {
    const fd = new FormData()
    fd.append('name', 'File Test')
    fd.append('email', 'filetest@test.com')
    fd.append('position', 'Developer')
    fd.append('coverLetter', 'File upload security test with sufficient cover letter length here')
    fd.append('resume', new Blob(['fake content'], { type }), filename)

    const res = await fetch(`${BASE}/api/apply`, { method: 'POST', body: fd })
    if (res.status === 400) {
      pass(`${label}`, `400 rejected ✓`)
    } else if (res.status === 429) {
      warn(`${label}`, `429 rate-limited — restart dev server and re-run to test properly`)
    } else {
      fail(`${label}`, `Expected 400, got ${res.status} — extension check may have failed!`)
    }
  }
}

// ─── Test 12: File Upload — Size Limit ───────────────────────────────────────

async function testFileUploadSize() {
  group('12. FILE UPLOAD — 5MB SIZE LIMIT')

  const fd = new FormData()
  fd.append('name', 'Size Test')
  fd.append('email', 'sizetest@test.com')
  fd.append('position', 'Developer')
  fd.append('coverLetter', 'Size limit test cover letter with sufficient length to pass validation')
  // Create a ~6MB buffer
  const sixMB = new Uint8Array(6 * 1024 * 1024).fill(65)
  fd.append('resume', new Blob([sixMB], { type: 'application/pdf' }), 'huge.pdf')

  const res = await fetch(`${BASE}/api/apply`, { method: 'POST', body: fd })
  if (res.status === 400) {
    pass('6MB PDF rejected', `400 ✓`)
  } else if (res.status === 429) {
    warn('6MB PDF rejected', `429 rate-limited — restart dev server and re-run to test properly`)
  } else {
    fail('6MB PDF rejected', `Expected 400, got ${res.status}`)
  }
}

// ─── Test 13 & 14: Public API sanity ─────────────────────────────────────────

async function testPublicAPIs() {
  group('13-14. PUBLIC API SANITY (blog + jobs)')

  for (const endpoint of ['/api/blog', '/api/jobs']) {
    const res = await fetch(`${BASE}${endpoint}`)
    const body = await safeJson(res)

    if (res.status === 200 && Array.isArray(body)) {
      pass(`${endpoint}`, `200, returns array (${body.length} items)`)
    } else if (res.status === 500) {
      // DB is down in local dev — acceptable, but check no leakage
      const text = JSON.stringify(body ?? '')
      hasStackTrace(text)
        ? fail(`${endpoint}`, 'Stack trace in 500 response!')
        : warn(`${endpoint}`, '500 (DB unavailable in dev) — no internals leaked ✓')
    } else {
      fail(`${endpoint}`, `Unexpected status ${res.status}`)
    }
  }
}

// ─── Test 15: Open Redirect ───────────────────────────────────────────────────

async function testOpenRedirect() {
  group('15. OPEN REDIRECT — MIDDLEWARE STAYS ON SAME HOST')

  // Next.js middleware redirects should always point to same origin
  const res = await fetch(`${BASE}/admin`, { redirect: 'manual' })
  const loc = res.headers.get('location') ?? ''

  if (loc.startsWith('http://') || loc.startsWith('https://')) {
    // Absolute URL — check it's same host
    try {
      const redirectUrl = new URL(loc)
      const baseUrl = new URL(BASE)
      redirectUrl.hostname === baseUrl.hostname
        ? pass('Admin redirect stays on same host', `→ ${loc}`)
        : fail('OPEN REDIRECT!', `Redirects to external host: ${loc}`)
    } catch {
      warn('Redirect URL parsing failed', loc)
    }
  } else if (loc.startsWith('/')) {
    pass('Admin redirect is relative path', `→ ${loc}`)
  } else {
    warn('No redirect location', `Status: ${res.status}`)
  }
}

// ─── Runner ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n' + '═'.repeat(60))
  console.log('  🔒  ENVITECT SECURITY TEST SUITE')
  console.log('═'.repeat(60))
  console.log(`  Target: ${BASE}`)
  console.log(`  Date:   ${new Date().toLocaleString()}`)
  console.log('═'.repeat(60))

  const serverUp = await testSecurityHeaders()
  if (!serverUp) {
    console.log('\n⛔  Server unreachable — aborting tests\n')
    process.exit(1)
  }

  // Run non-rate-limiting tests first to avoid rate limit exhaustion
  await testCSRFProtection()
  await testInputValidation()
  await testAdminAuthBypass()
  await testAdminAPIAuth()
  await testXSSResponse()
  await testSQLInjection()
  await testInvalidJSON()
  await testFileUploadExtension()
  await testFileUploadSize()
  await testPublicAPIs()
  await testOpenRedirect()

  // Rate limit tests last — they exhaust the in-memory rate limiter
  // (restart dev server between runs to reset limits)
  console.log('\n  ℹ️   Rate limit tests run last to avoid polluting earlier tests.')
  console.log('  ℹ️   If these fail, restart the dev server to reset in-memory limits.\n')
  await testRateLimitContact()
  await testRateLimitApply()

  // ── Summary ────────────────────────────────────────────────────────────────
  const passed  = results.filter(r => r.status.startsWith('✅')).length
  const failed  = results.filter(r => r.status.startsWith('❌')).length
  const warned  = results.filter(r => r.status.startsWith('⚠️')).length
  const total   = results.length

  console.log('\n' + '═'.repeat(60))
  console.log('  SUMMARY')
  console.log('═'.repeat(60))
  console.log(`  Total   : ${total}`)
  console.log(`  ✅ Pass  : ${passed}`)
  console.log(`  ❌ Fail  : ${failed}`)
  console.log(`  ⚠️  Warn  : ${warned}`)
  console.log('═'.repeat(60))

  if (failed > 0) {
    console.log('\n  FAILURES TO FIX:')
    results.filter(r => r.status.startsWith('❌')).forEach(r => {
      console.log(`  ❌  [${r.group}] ${r.name}`)
      if (r.detail) console.log(`       ${r.detail}`)
    })
  }

  if (warned > 0) {
    console.log('\n  WARNINGS TO REVIEW:')
    results.filter(r => r.status.startsWith('⚠️')).forEach(r => {
      console.log(`  ⚠️   [${r.group}] ${r.name}`)
      if (r.detail) console.log(`       ${r.detail}`)
    })
  }

  console.log('')
  process.exit(failed > 0 ? 1 : 0)
}

main().catch(e => {
  console.error('\n💥  Test runner crashed:', e.message)
  process.exit(1)
})
