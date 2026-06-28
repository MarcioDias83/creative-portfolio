import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const text = await request.text()
    const params = new URLSearchParams(text)
    const name = params.get('name') || ''
    const email = params.get('email') || ''
    const subject = params.get('subject') || null
    const message = params.get('message') || ''

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await prisma.message.create({
      data: { name, email, subject, message },
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
