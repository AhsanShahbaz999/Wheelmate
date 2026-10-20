const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/create', async (req, res) => {
  try {
    const { price, product_ids, quantity, username } = req.body;
    
    // Generate a unique order ID
    const oid = Date.now().toString();

    // Create new order
    const newOrder = new Order({
      oid,
      price: parseFloat(price),
      product_ids: JSON.parse(product_ids),
      quantity: JSON.parse(quantity),
      username
    });

    // Save to database
    await newOrder.save();

    res.status(201).json({
      message: 'Order created successfully',
      order: newOrder
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
});

// Get user orders
router.get('/get_orders', async (req, res) => {
  try {
    const search = req.query.search;
    const orders = await Order.find({ username: search });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
});

module.exports = router;
