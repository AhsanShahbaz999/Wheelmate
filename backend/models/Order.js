const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  oid: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  product_ids: {
    type: [String],
    required: true
  },
  quantity: {
    type: [Number],
    required: true
  },
  username: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
