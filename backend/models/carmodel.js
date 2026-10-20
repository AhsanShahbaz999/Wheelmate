const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  // Step 1: Car Info
  reg_city: String,
  city: String,
  color: String,
  mileage: String,
  year: String,
  make: String,
  model: String,
  variant: String,
  bodytype: String,

  // Step 2: Price
  price: String,

  // Step 3: Engine & Specs
  engine_type: String,
  engine_capacity: String,
  transmission: String,
  assembly: String,

  // Step 3 (Part 1): Features (Booleans)
  airbags: Boolean,
  airconditioner: Boolean,
  alloywheels: Boolean,
  antilockbreakingsystem: Boolean,
  coolbox: Boolean,
  cupholders: Boolean,
  foldingrearseat: Boolean,
  immobilizer: Boolean,
  powerdoorlocks: Boolean,
  powersteering: Boolean,
  powerwindows: Boolean,
  powermirrors: Boolean,
  rearwiper: Boolean,
  tractioncontrol: Boolean,
  rearseatent: Boolean,
  climatecontrol: Boolean,
  rearacvents: Boolean,
  frontspeaker: Boolean,
  rearspeaker: Boolean,
  armrests: Boolean,

  // Step 4: Images (base64 encoded strings array)
  images: [String],

  // Step 5: Seller Info
  seller_name: String,
  seller_phone: String,
  description: String,

  // Auto-filled date
  created_at: {
    type: String,
    default: () => {
      const d = new Date();
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
  }
});

module.exports = mongoose.model("Car", carSchema);
