import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./model/Product.js";

dotenv.config();

const products = [
  {
    title: "Wireless Bluetooth Earbuds",
    description: "Noise-cancelling earbuds with 24-hour battery life.",
    images: [
      "https://example.com/images/earbuds1.jpg",
      "https://example.com/images/earbuds2.jpg",
    ],
    price: 1499,
    rating: 4.5,
  },
  {
    title: "Gaming Mechanical Keyboard",
    description: "RGB backlit blue-switch keyboard for fast typing.",
    images: ["https://example.com/images/keyboard.jpg"],
    price: 2499,
    rating: 4.2,
  },
  {
    title: "Men's Running Shoes",
    description: "Lightlight breathable sports shoes.",
    images: ["https://example.com/images/shoes.jpg"],
    price: 1899,
    rating: 4.0,
  },
  {
    title: "Smart Fitness Watch",
    description: "Heart-rate, sleep tracking, and step counter.",
    images: ["https://example.com/images/watch.jpg"],
    price: 2999,
    rating: 4.3,
  },
  {
    title: "USB-C Fast Charger 25W",
    description: "Fast charging adapter for Android and iPhone.",
    images: ["https://example.com/images/charger.jpg"],
    price: 699,
    rating: 4.6,
  },
  {
    title: "Laptop Backpack",
    description: "Water-resistant bag with multiple compartments.",
    images: ["https://example.com/images/backpack.jpg"],
    price: 1299,
    rating: 4.1,
  },
  {
    title: "4K Ultra HD Smart TV",
    description: "55-inch smart TV with Dolby Vision and HDR10.",
    images: ["https://example.com/images/tv.jpg"],
    price: 39999,
    rating: 4.7,
  },
  {
    title: "Air Purifier",
    description: "HEPA filter purifier for home and office use.",
    images: ["https://example.com/images/purifier.jpg"],
    price: 8999,
    rating: 4.4,
  },
  {
    title: "Portable Bluetooth Speaker",
    description: "Deep bass, waterproof design, 10-hour playtime.",
    images: ["https://example.com/images/speaker.jpg"],
    price: 1999,
    rating: 4.3,
  },
  {
    title: "Hair Dryer 2000W",
    description: "Fast drying with heat protection technology.",
    images: ["https://example.com/images/hairdryer.jpg"],
    price: 1299,
    rating: 4.2,
  },
];

async function seedDB() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Clearing old products...");
    await Product.deleteMany();

    console.log("Inserting new products...");
    await Product.insertMany(products);

    console.log("🌱 Seed Completed Successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seed Error:", err);
    mongoose.connection.close();
  }
}

seedDB();
