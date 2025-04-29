require('dotenv').config();
const pool = require('./db');

const insertQuery = `
INSERT INTO product (
  name, description, price, image_url, category, colors, created_at
) VALUES ($1, $2, $3, $4, $5, $6, NOW())
RETURNING *;
`;

const values = [
  'Mechanical Dice',
  '3D printed mechanical dice with yellow and white parts. Fun, durable, and unique for board games or as a fidget toy.',
  5.00,
  '/assets/images/mechanical-dice.jpg',
  'Dice',
  ['yellow', 'white']
];

pool.query(insertQuery, values)
  .then(res => {
    console.log('Inserted product:', res.rows[0]);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error inserting product:', err);
    process.exit(1);
  });
