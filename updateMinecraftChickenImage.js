// updateMinecraftChickenImage.js
const pool = require('./db');

async function updateMinecraftChickenImage() {
  try {
    const result = await pool.query(
      `UPDATE product SET image_url = '/assets/images/minecraft-chicken.jpg' WHERE name = 'Minecraft Chicken' RETURNING *`
    );
    console.log('Updated Minecraft Chicken image:', result.rows[0]);
  } catch (err) {
    console.error('Error updating Minecraft Chicken image:', err);
  } finally {
    pool.end();
  }
}

updateMinecraftChickenImage();
