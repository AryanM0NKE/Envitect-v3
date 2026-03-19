/**
 * server.js — Hostinger Node.js startup file
 *
 * Wraps Next.js in a standard Node HTTP server so Hostinger can manage the
 * process and inject the PORT environment variable.
 *
 * Hostinger hPanel → Node.js:
 *   Startup File : server.js
 *   Node version : 20.x LTS
 *   Environment  : production
 *
 * The server reads PORT from the environment (set by Hostinger). Falls back to
 * 3000 for local testing. Never hard-code a port here.
 */

'use strict'

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev      = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME  || '0.0.0.0'
const port     = parseInt(process.env.PORT || '3000', 10)

const app    = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL — must pass true to parse the query string
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('[server.js] Uncaught request error:', err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`> Envitect Designs ready on http://${hostname}:${port}`)
    console.log(`  NODE_ENV : ${process.env.NODE_ENV || 'development'}`)
    console.log(`  Hostname : ${hostname}`)
    console.log(`  Port     : ${port}`)
  })
})
