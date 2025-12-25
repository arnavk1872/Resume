import { NextRequest, NextResponse } from 'next/server'
import { query, initDatabase } from '@/lib/db'

let dbInitialized = false

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required' },
      { status: 400 }
    )
  }

  try {
    if (!dbInitialized) {
      await initDatabase()
      dbInitialized = true
    }

    const result = await query(
      'INSERT INTO portfolio_queries (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, subject || null, message]
    )

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form submission error:', error)
    
    if (error.code === '42P01') {
      try {
        await initDatabase()
        dbInitialized = true
        
        const result = await query(
          'INSERT INTO portfolio_queries (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id',
          [name, email, subject || null, message]
        )
        return NextResponse.json(
          { success: true, id: result.rows[0].id },
          { status: 200 }
        )
      } catch (retryError) {
        console.error('Retry failed:', retryError)
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    )
  }
}

