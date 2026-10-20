require("dotenv").config();
const mongoose = require("mongoose");
const Car = require("./models/carmodel"); // ✅ Ensure correct path
const cars = require("./data/cardata");  // ✅ Ensure correct path

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("✅ MongoDB Connected!");

    await Car.deleteMany({});
    console.log("🗑️ Old car data deleted");

    await Car.insertMany(cars);
    console.log("🚗 Cars inserted successfully!");

    mongoose.connection.close();
  })
  .catch((error) => console.error("❌ MongoDB Connection Failed:", error));
