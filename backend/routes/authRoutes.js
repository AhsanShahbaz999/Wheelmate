// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/usermodel');  // Ensure this path is correct

// const router = express.Router();

// // Register user
// router.post('/register', async (req, res) => {
//   const { first_name, username, password} = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       first_name,
//       username,
//       password: hashedPassword,
//     //   contact,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);  // Log the error for better debugging
//     res.status(500).json({ error: 'Internal server error during registration' });
//   }
// });

// // Login user
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Validate password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send response
//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: { username: user.username, firstName: user.first_name },
//     });
//   } catch (error) {
//     console.error(error);  // Log the error for better debugging
//     res.status(500).json({ error: 'Internal server error during login' });
//   }
// });

// module.exports = router;



const express = require('express');
const { signup, signin } = require('../controllers/authController');  // Import controller functions
const router = express.Router();

// Register user
router.post('/register', signup);

// Login user
router.post('/login', signin);

module.exports = router;



