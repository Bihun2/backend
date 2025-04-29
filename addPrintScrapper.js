// addPrintScrapper.js
const pool = require('./db');

async function addPrintScrapper() {
  const name = '3D Printer Scrapper';
  const description = 'A sturdy 3D printed scrapper tool designed for removing prints from the print bed. Made from durable PLA in bright red. Ergonomic handle for comfortable use. Essential for any 3D printing enthusiast.';
  const price = 3.00;
  const image_url = '/assets/images/print-scrapper.jpg';
  const category = 'Tools';
  const rating = 5;
  const reviews = 1;
  const seller = 'Cascade AI';
  const is_featured = true;
  const is_customizable = false;
  const dimensions = '18cm x 7cm x 1cm';
  const material = 'PLA (red)';
  const colors = ['red'];

  try {
    const result = await pool.query(
      `INSERT INTO product (name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors]
    );
    console.log('3D Printer Scrapper added:', result.rows[0]);
  } catch (err) {
    console.error('Error adding 3D Printer Scrapper:', err);
  } finally {
    pool.end();
  }
}

addPrintScrapper();
