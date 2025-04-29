// addBallRunToy.js
const pool = require('./db');

async function addBallRunToy() {
  const name = 'Ball Run Toy';
  const description = 'A fun and interactive 3D printed ball run toy. Features a winding track for marbles or balls to race down. Made from bright yellow PLA with red accents. Great for kids, STEM education, or as a mesmerizing desk toy.';
  const price = 12.00;
  const image_url = '/assets/images/ball-run.jpg';
  const category = 'Toys';
  const rating = 5;
  const reviews = 1;
  const seller = 'Cascade AI';
  const is_featured = true;
  const is_customizable = true;
  const dimensions = '25cm x 20cm x 5cm';
  const material = 'PLA (yellow, red)';
  const colors = ['yellow', 'red'];

  try {
    const result = await pool.query(
      `INSERT INTO product (name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors]
    );
    console.log('Ball Run Toy added:', result.rows[0]);
  } catch (err) {
    console.error('Error adding Ball Run Toy:', err);
  } finally {
    pool.end();
  }
}

addBallRunToy();
