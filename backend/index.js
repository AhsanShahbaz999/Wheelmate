require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors());

// Check if MONGO_URI is defined
if (!MONGO_URI) {
  console.error(" ERROR: MONGO_URI is not defined. Check your .env file.");
  process.exit(1); // Stop execution if MONGO_URI is missing
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error(" MongoDB Connection Failed:", err);
    process.exit(1); // Stop execution if MongoDB connection fails
  });

// Sample Route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
  console.log("GET request received on /");
});

// Import Car Model
const Car = require("./models/carmodel");

// Fetch All Cars
app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});
