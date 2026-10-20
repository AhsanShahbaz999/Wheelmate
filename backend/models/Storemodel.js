const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  pname: { type: String, required: true },
  ptype: { type: String, required: true },  // Should be 'accessory' or something similar
  price: { type: Number, required: true },
  images: { type: String, required: true }, // Image URL or file path
});

module.exports = mongoose.model("Accessory", accessorySchema);
