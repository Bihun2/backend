// addAirplaneToy.js
const pool = require('./db');

async function addAirplaneToy() {
  const name = 'Airplane Toy';
  const description = 'A 3D printed airplane toy with vibrant yellow and white parts. Lightweight, durable, and perfect for kids or as a decorative desk piece. Great for aviation enthusiasts and collectors.';
  const price = 4.00;
  const image_url = '/assets/images/airplane-toy.jpg';
  const category = 'Toys';
  const rating = 5;
  const reviews = 1;
  const seller = 'Cascade AI';
  const is_featured = true;
  const is_customizable = true;
  const dimensions = '15cm x 15cm x 5cm';
  const material = 'PLA (white, yellow)';
  const colors = ['white', 'yellow'];

  try {
    const result = await pool.query(
      `INSERT INTO product (name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors]
    );
    console.log('Airplane Toy added:', result.rows[0]);
  } catch (err) {
    console.error('Error adding Airplane Toy:', err);
  } finally {
    pool.end();
  }
}

addAirplaneToy();
