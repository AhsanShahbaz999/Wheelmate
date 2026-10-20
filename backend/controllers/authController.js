const bcrypt = require('bcryptjs');
const User = require('../models/usermodel');  // Ensure this path is correct
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// Signup Controller
const signup = async (req, res) => {
  const { first_name, username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      first_name,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during registration:", error.message);  // Detailed error log
    res.status(500).json({ error: error.message });
  }
};

// Login Controller
const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with user information, a success message, and the token
    res.status(200).json({
      message: "Login successful",
      user: { username: user.username, firstName: user.first_name },
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error during login', details: error.message });
  }
};

module.exports = { signup, signin };
