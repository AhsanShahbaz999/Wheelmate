// models/customerModel.js

const mongoose = require('mongoose');

// Define the customer schema
const customerSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  contact: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  state: { type: String },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
