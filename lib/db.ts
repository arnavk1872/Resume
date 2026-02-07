import { Pool } from 'pg'

if (!process.env.DB_CONNECTION_STRING) {
  console.error('DB_CONNECTION_STRING environment variable is not set')
}

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

export async function query(text: string, params?: any[]) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('Executed query', { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error('Database query error', error)
    throw error
  }
}

export async function initDatabase() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS portfolio_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    await query(`
      CREATE TABLE IF NOT EXISTS visits (
        id SERIAL PRIMARY KEY,
        ip VARCHAR(45),
        user_agent TEXT,
        referer TEXT,
        path VARCHAR(500),
        visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log('Database table initialized')
  } catch (error) {
    console.error('Database initialization error', error)
    throw error
  }
}

