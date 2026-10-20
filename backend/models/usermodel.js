const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    unique: true,  // Ensure no two users can have the same email
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

const User = mongoose.model('User', userSchema);

module.exports = User;
