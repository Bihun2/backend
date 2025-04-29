require('dotenv').config();
const pool = require('./db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  category VARCHAR(100),
  rating REAL DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  seller VARCHAR(255),
  is_featured BOOLEAN DEFAULT FALSE,
  is_customizable BOOLEAN DEFAULT FALSE,
  dimensions VARCHAR(255),
  material VARCHAR(100),
  colors TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

pool.query(createTableQuery)
  .then(res => {
    console.log('Product table created or already exists.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error creating product table:', err);
    process.exit(1);
  });
