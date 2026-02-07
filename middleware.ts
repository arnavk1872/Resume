import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return NextResponse.next()
  }

  const path = request.nextUrl.pathname
  const origin = request.nextUrl.origin

  try {
    await fetch(`${origin}/api/visit`, {
      method: 'GET',
      headers: {
        'x-forwarded-for': request.headers.get('x-forwarded-for') ?? '',
        'x-real-ip': request.headers.get('x-real-ip') ?? '',
        'user-agent': request.headers.get('user-agent') ?? '',
        referer: request.headers.get('referer') ?? '',
        'x-visit-path': path,
      },
    })
  } catch {
    // Don't block the request if logging fails
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2)$).*)'],
}
