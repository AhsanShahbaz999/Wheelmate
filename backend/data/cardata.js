const carData = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "White",
    description: "Excellent condition, one owner, full service history",
    images: [
      "http://localhost:4000/uploads/car-1.PNG",
      "http://localhost:4000/uploads/car-2.PNG"
    ],
    features: ["Bluetooth", "Backup Camera", "Cruise Control", "Leather Seats"],
    location: "New York, NY",
    contact: "+1-555-0123"
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 20000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Blue",
    description: "Well maintained, great fuel economy, perfect for daily commute",
    images: [
      "http://localhost:4000/uploads/car-3.PNG",
      "http://localhost:4000/uploads/car-4.PNG"
    ],
    features: ["Apple CarPlay", "Android Auto", "Lane Departure Warning", "Collision Mitigation"],
    location: "Los Angeles, CA",
    contact: "+1-555-0124"
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 2023,
    price: 45000,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    color: "Black",
    description: "Luxury sedan with premium features, low mileage",
    images: [
      "http://localhost:4000/uploads/car-5.PNG",
      "http://localhost:4000/uploads/car-6.PNG"
    ],
    features: ["Navigation", "Premium Sound System", "Heated Seats", "Parking Sensors"],
    location: "Miami, FL",
    contact: "+1-555-0125"
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    price: 38000,
    mileage: 12000,
    fuelType: "Gasoline",
    transmission: "Manual",
    color: "Red",
    description: "Sporty muscle car, great performance, eye-catching design",
    images: [
      "http://localhost:4000/uploads/car-7.PNG",
      "http://localhost:4000/uploads/car-8.PNG"
    ],
    features: ["V8 Engine", "Sport Mode", "Track Apps", "Launch Control"],
    location: "Dallas, TX",
    contact: "+1-555-0126"
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 42000,
    mileage: 5000,
    fuelType: "Electric",
    transmission: "Automatic",
    color: "White",
    description: "Electric vehicle with advanced autopilot features",
    images: [
      "http://localhost:4000/uploads/car-9.PNG",
      "http://localhost:4000/uploads/car-10.PNG"
    ],
    features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Interior"],
    location: "San Francisco, CA",
    contact: "+1-555-0127"
  }
];

module.exports = carData;
