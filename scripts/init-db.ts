import { query } from '../lib/db'

async function initDatabase() {
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
    console.log('Database table initialized successfully')
    process.exit(0)
  } catch (error) {
    console.error('Database initialization error:', error)
    process.exit(1)
  }
}

initDatabase()

