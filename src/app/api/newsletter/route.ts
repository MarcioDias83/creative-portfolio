import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return Response.json({ error: 'Email é obrigatório' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Email inválido' }, { status: 400 })
    }

    await prisma.subscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Erro interno' }, { status: 500 })
  }
}
