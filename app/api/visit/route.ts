import { NextRequest, NextResponse } from 'next/server'
import { query, initDatabase } from '@/lib/db'

export const dynamic = 'force-dynamic'

let dbInitialized = false

function getClientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? null
  return request.headers.get('x-real-ip')
}

export async function GET(request: NextRequest) {
  try {
    if (!dbInitialized) {
      await initDatabase()
      dbInitialized = true
    }

    const ip = getClientIp(request) ?? null
    const userAgent = request.headers.get('user-agent') ?? null
    const referer = request.headers.get('referer') ?? null
    const path = (request.headers.get('x-visit-path') ?? request.nextUrl.pathname) || '/'

    await query(
      'INSERT INTO visits (ip, user_agent, referer, path) VALUES ($1, $2, $3, $4)',
      [ip, userAgent, referer, path]
    )

    return new NextResponse(null, { status: 204 })
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && (error as { code: string }).code === '42P01') {
      try {
        await initDatabase()
        dbInitialized = true
        const ip = getClientIp(request) ?? null
        const userAgent = request.headers.get('user-agent') ?? null
        const referer = request.headers.get('referer') ?? null
        const path = (request.headers.get('x-visit-path') ?? request.nextUrl.pathname) || '/'
        await query(
          'INSERT INTO visits (ip, user_agent, referer, path) VALUES ($1, $2, $3, $4)',
          [ip, userAgent, referer, path]
        )
        return new NextResponse(null, { status: 204 })
      } catch {
        // fall through to 500
      }
    }
    console.error('Visit log error:', error)
    return new NextResponse(null, { status: 500 })
  }
}
