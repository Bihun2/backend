// addMinecraftChicken.js
const pool = require('./db');

async function addMinecraftChicken() {
  const name = 'Minecraft Chicken';
  const description = 'A 3D printed Minecraft-style chicken, perfect for fans of the game or as a fun desk accessory. Made with durable PLA in white, yellow, and red colors. Great for collectors, gamers, or as a unique gift.';
  const price = 10.00;
  const image_url = 'https://i.imgur.com/0QeQx2y.jpg';
  const category = 'Toys';
  const rating = 5;
  const reviews = 1;
  const seller = 'Cascade AI';
  const is_featured = true;
  const is_customizable = true;
  const dimensions = '5cm x 5cm x 7cm';
  const material = 'PLA (white, yellow, red)';
  const colors = ['white', 'yellow', 'red'];

  try {
    const result = await pool.query(
      `INSERT INTO product (name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [name, description, price, image_url, category, rating, reviews, seller, is_featured, is_customizable, dimensions, material, colors]
    );
    console.log('Minecraft Chicken added:', result.rows[0]);
  } catch (err) {
    console.error('Error adding Minecraft Chicken:', err);
  } finally {
    pool.end();
  }
}

addMinecraftChicken();
