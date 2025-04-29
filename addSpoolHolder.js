// addSpoolHolder.js
const pool = require('./db');

async function addSpoolHolder() {
  const name = '3D Printer Spool Holder';
  const description = 'A robust 3D printed spool holder for filament spools. Designed for stability and smooth rotation. Made from strong white PLA. Perfect for any 3D printer setup to keep filament feeding reliably.';
  const price = 3.00;
  const image_url = '/assets/images/spool-holder.jpg';
  const category = 'Tools';
  const rating = 5;
  const reviews = 1;
  const seller = 'Cascade AI';
  const is_featured = true;
  const is_customizable = false;
  const dimensions = '10cm x 10cm x 8cm';
  const material = 'PLA (white)';
  const colors = ['white'];

  try {
    const result = await pool.query(
      `INSERT INTO product (name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors]
    );
    console.log('3D Printer Spool Holder added:', result.rows[0]);
  } catch (err) {
    console.error('Error adding 3D Printer Spool Holder:', err);
  } finally {
    pool.end();
  }
}

addSpoolHolder();
