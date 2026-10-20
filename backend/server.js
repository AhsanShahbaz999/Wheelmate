require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const Car = require("./models/carmodel");
const authRoutes = require("./routes/authRoutes");  // Ensure this path is correct
const storeData = require('./data/storedata');  // Import the mock store data (accessories)
const app = express();
const PORT = process.env.PORT || 4000;

// Check if MongoDB URI is available
if (!process.env.MONGO_URI) {
  console.error("❌ MongoDB URI is missing in the environment variables");
  process.exit(1); // Terminate if the URI is missing
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
  }
});

// Enable CORS
app.use(cors({
  origin: 'http://localhost:7777',  // Update with your frontend's URL (React app)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Increase payload size limits
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1); // Terminate if there's a database connection issue
  });

// ROUTES

// Create Car Post with file upload
app.post("/cars/create", upload.array('images', 5), async (req, res) => {
  try {
    const carData = req.body;
    
    // Add image paths to car data
    if (req.files && req.files.length > 0) {
      carData.images = req.files.map(file => `http://localhost:4000/uploads/${file.filename}`);
      console.log('Uploaded images:', carData.images); // Debug log
    }

    const newCar = new Car(carData);
    await newCar.save();
    console.log('Saved car data:', newCar); // Debug log
    res.status(201).json({ message: "Post created successfully", car: newCar });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Fetch Car Posts
app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    console.log('Fetched cars:', cars); // Debug log
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// Fetch Store Accessories with Search and Price Filters
app.get("/store/accessories", (req, res) => {
  try {
    const { search, minPrice, maxPrice } = req.query;
    let filteredData = [...storeData]; // Create a copy of the store data

    // Apply search filter (case-insensitive)
    if (search) {
      filteredData = filteredData.filter(item => 
        item.pname.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply price filter
    if (minPrice && maxPrice) {
      filteredData = filteredData.filter(item => 
        item.price >= parseFloat(minPrice) && item.price <= parseFloat(maxPrice)
      );
    }

    res.json(filteredData);  // Return filtered accessories only
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch accessories" });
  }
});

// User Authentication Routes
app.use('/user', authRoutes);  // Register user authentication routes

// Default route for testing API
app.get("/", (req, res) => res.send("🚗 AutoBidUp Backend Ready"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
