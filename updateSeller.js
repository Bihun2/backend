require('dotenv').config();
const pool = require('./db');

const updateQuery = `
  UPDATE product
  SET seller = $1
  WHERE name = $2
  RETURNING *;
`;

const values = [
  'aslam',
  'Mechanical Dice'
];

pool.query(updateQuery, values)
  .then(res => {
    console.log('Updated product:', res.rows[0]);
    process.exit(0);
  })
  .catch(err => {
    console.error('Error updating seller:', err);
    process.exit(1);
  });
