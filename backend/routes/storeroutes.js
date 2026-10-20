const express = require('express');
const storeData = require('./storedata');  // Import the mock store data
const router = express.Router();
// Fetch Accessories with Search and Price Filters (only for images)
router.get("/accessories", (req, res) => {
  try {
    const { search } = req.query; // Only use search for image filtering
    let filteredData = [...storeData]; // Create a copy of the store data

    // Apply search filter (case-insensitive)
    if (search) {
      filteredData = filteredData.filter(item => 
        item.pname.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Return only the image URLs (no need to return full accessory data)
    const images = filteredData.map(item => ({
      pname: item.pname,
      imageUrl: `http://localhost:4000${item.images}`, // Full image URL
    }));

    res.json(images);  // Return the image URLs
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch accessories" });
  }
});

// Create a new accessory (Optional for future)
router.post("/accessories/create", (req, res) => {
  try {
    const newAccessory = req.body;
    storeData.push(newAccessory);  // Add the new accessory to the mock data
    res.status(201).json({ message: "Accessory created successfully", accessory: newAccessory });
  } catch (error) {
    res.status(500).json({ error: "Failed to create accessory" });
  }
});

// Update an accessory (Optional for future)
router.put("/accessories/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const updatedAccessory = storeData.find(item => item.pid == id);  // Assuming `pid` is unique
    if (updatedAccessory) {
      Object.assign(updatedAccessory, req.body);  // Update the accessory with new data
      res.json({ message: "Accessory updated successfully", accessory: updatedAccessory });
    } else {
      res.status(404).json({ message: "Accessory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update accessory" });
  }
});

// Delete an accessory (Optional for future)
router.delete("/accessories/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = storeData.findIndex(item => item.pid == id);
    if (index !== -1) {
      storeData.splice(index, 1);  // Remove the accessory from the mock data
      res.json({ message: "Accessory deleted successfully" });
    } else {
      res.status(404).json({ message: "Accessory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete accessory" });
  }
});

module.exports = router;
