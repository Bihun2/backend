const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all products
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a product
router.post('/', async (req, res) => {
  const { name, description, imageurl, price, seller, material, dimensions, iscustomizable } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO product (name, description, imageurl, price, seller, material, dimensions, iscustomizable) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [name, description, imageurl, price, seller, material, dimensions, iscustomizable]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
