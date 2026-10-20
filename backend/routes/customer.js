// routes/customer.js

const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');

// Fetch customer profile data (GET request)
router.get('/customer-details', async (req, res) => {
  try {
    // Assuming we have some method of authentication to get the current user's ID
    const customerId = req.user._id; // You should implement authentication and use user ID from session or token
    
    // Fetch the customer profile from the database
    const customer = await Customer.findById(customerId);
    
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    
    res.json(customer); // Send the customer details as response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch customer details' });
  }
});

// Update customer profile data (POST request)
router.post('/update-customer', async (req, res) => {
  try {
    const { first_name, last_name, contact, username, state, email } = req.body;
    const customerId = req.user._id; // Use authenticated user ID to update their profile
    
    // Find the customer by ID and update their profile
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { first_name, last_name, contact, username, state, email },
      { new: true } // Return the updated customer
    );

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json(customer); // Return updated customer data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update customer details' });
  }
});

module.exports = router;
