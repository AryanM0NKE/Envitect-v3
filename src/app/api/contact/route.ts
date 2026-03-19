import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('🔥 BACKEND HIT', body)

    const newContact = await prisma.contact.create({
      data: {
        name:    body.name,
        email:   body.email,
        message: body.message,
      },
    })

    return NextResponse.json({ success: true, data: newContact })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}