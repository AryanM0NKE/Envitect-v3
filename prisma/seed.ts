/**
 * Database Seed (Prisma 7 + MariaDB/MySQL adapter)
 *
 * Run once after migrations to populate:
 *   - Initial admin user
 *   - Sample job listings
 *
 * Usage:
 *   SEED_ADMIN_PASSWORD=yourpassword npm run db:seed
 *
 * Optional (to override default admin email):
 *   SEED_ADMIN_EMAIL=admin@yourdomain.com SEED_ADMIN_PASSWORD=yourpassword npm run db:seed
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";

function createClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not set in .env.local");

  const url = new URL(databaseUrl);
  const adapter = new PrismaMariaDb({
    host: url.hostname,
    port: url.port ? parseInt(url.port, 10) : 3306,
    user: url.username,
    password: url.password,
    database: url.pathname.replace(/^\//, ""),
    connectionLimit: 5,
  });
  return new PrismaClient({ adapter });
}

const prisma = createClient();

async function main() {
  console.log("🌱 Seeding database...\n");

  // ── 1. Admin User ─────────────────────────────────────────────────────────
  const SEED_ADMIN_EMAIL =
    process.env.SEED_ADMIN_EMAIL || "admin@envitectdesigns.com";
  const SEED_ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD;

  if (!SEED_ADMIN_PASSWORD) {
    throw new Error(
      "SEED_ADMIN_PASSWORD is required.\n" +
        "Run: SEED_ADMIN_PASSWORD=yourpassword npm run db:seed\n" +
        "Password must be at least 12 characters."
    );
  }

  if (SEED_ADMIN_PASSWORD.length < 12) {
    throw new Error("SEED_ADMIN_PASSWORD must be at least 12 characters long.");
  }

  const passwordHash = await bcrypt.hash(SEED_ADMIN_PASSWORD, 12);

  const admin = await prisma.adminUser.upsert({
    where: { email: SEED_ADMIN_EMAIL },
    update: {},
    create: {
      email: SEED_ADMIN_EMAIL,
      passwordHash,
      name: "Envitect Admin",
      role: "SUPER_ADMIN",
    },
  });

  console.log(`✅ Admin user ready: ${admin.email} (${admin.role})`);

  // ── 2. Sample Job Listings ─────────────────────────────────────────────────
  const jobs = [
    {
      title: "Senior BIM Modeler",
      department: "BIM Services",
      type: "Full-time",
      location: "Remote",
      description:
        "We are looking for a skilled Senior BIM Modeler to join our team. You will be responsible for developing detailed BIM models using Revit, coordinating with architects and engineers, and delivering high-quality LOD 300+ models for commercial and residential projects.",
      requirements:
        "5+ years of Revit experience\nProficiency in Navisworks for clash detection\nExperience with LOD 200–400 modeling\nKnowledge of MEP, structural, and architectural coordination\nStrong communication skills",
      active: true,
    },
    {
      title: "CAD Drafter",
      department: "CAD Drafting Services",
      type: "Full-time",
      location: "Remote",
      description:
        "Join our CAD drafting team to produce precise architectural and structural drawings. You will convert paper drawings to CAD, create as-built documentation, and support our architecture and engineering clients with accurate technical drawings.",
      requirements:
        "3+ years of AutoCAD experience\nFamiliarity with architectural and structural standards\nAbility to read and interpret construction documents\nExperience with PDF-to-CAD conversion\nAttention to detail and accuracy",
      active: true,
    },
    {
      title: "Solar Design Engineer",
      department: "Solar Design & Engineering",
      type: "Full-time",
      location: "Remote",
      description:
        "Design and engineer solar PV systems for residential and commercial clients. You will create permit-ready solar plans, coordinate with PE engineers for stamp approval, and ensure designs meet NEC and local jurisdiction requirements.",
      requirements:
        "Knowledge of PVsyst, Helioscope, or Aurora Solar\nUnderstanding of NEC solar codes (690, 705)\nExperience with AHJ permit plan sets\nFamiliarity with interconnection processes\nElectrical engineering background preferred",
      active: true,
    },
    {
      title: "Graphic Designer — Real Estate",
      department: "Graphic Design",
      type: "Full-time",
      location: "Remote",
      description:
        "Create compelling visual content for real estate developers and architects including branding packages, marketing brochures, signage systems, and interactive presentations. Collaborate with architecture teams to produce materials that elevate project marketing.",
      requirements:
        "3+ years in Adobe Creative Suite (Illustrator, InDesign, Photoshop)\nPortfolio showing real estate or architecture design work\nExperience with presentation design (PowerPoint/Keynote)\nBranding and identity design skills\nAbility to manage multiple projects",
      active: true,
    },
  ];

  for (const job of jobs) {
    const existing = await prisma.jobListing.findFirst({
      where: { title: job.title },
    });

    if (!existing) {
      await prisma.jobListing.create({ data: job });
      console.log(`✅ Created job: ${job.title}`);
    } else {
      console.log(`⏭️  Job exists (skipping): ${job.title}`);
    }
  }

  console.log("\n🎉 Seed complete!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Admin login: ${SEED_ADMIN_EMAIL}`);
  console.log("First login at: /admin/login");
  console.log("Change password at: /admin/settings");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error("\n❌ Seed failed:", e.message);
    await prisma.$disconnect();
    process.exit(1);
  });
