import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./model/Product.js";

dotenv.config();

const products = [
  {
    title: "Wireless Bluetooth Earbuds",
    description: "Noise-cancelling earbuds with 24-hour battery life.",
    images: [
      "https://images.unsplash.com/photo-1755182529034-189a6051faae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    price: 1499,
    rating: 4.5,
  },
  {
    title: "Gaming Mechanical Keyboard",
    description: "Blue-switch keyboard for fast typing.",
    images: ["https://images.unsplash.com/photo-1632078965189-98b83d14ed43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 2499,
    rating: 4.2,
  },
  {
    title: "Men's Running Shoes",
    description: "Lightlight breathable sports shoes.",
    images: ["https://images.unsplash.com/photo-1518656306295-aa28b28b2504?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 1899,
    rating: 4.0,
  },
  {
    title: "Smart Fitness Watch",
    description: "Heart-rate, sleep tracking, and step counter.",
    images: ["https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 2999,
    rating: 4.3,
  },
  {
    title: "USB-C Fast Charger 25W",
    description: "Fast charging adapter for Android and iPhone.",
    images: ["https://plus.unsplash.com/premium_photo-1669262667978-5d4aafe29dd5?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 699,
    rating: 4.6,
  },
  {
    title: "Laptop Backpack",
    description: "Water-resistant bag with multiple compartments.",
    images: ["https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 1299,
    rating: 4.1,
  },
  {
    title: "4K Ultra HD Smart TV",
    description: "55-inch smart TV with Dolby Vision and HDR10.",
    images: ["https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 39999,
    rating: 4.7,
  },
  {
    title: "Air Purifier",
    description: "HEPA filter purifier for home and office use.",
    images: ["https://images.unsplash.com/photo-1617775047746-5b36a40109f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 8999,
    rating: 4.4,
  },
  {
    title: "Portable Bluetooth Speaker",
    description: "Deep bass, waterproof design, 10-hour playtime.",
    images: ["https://images.unsplash.com/photo-1589001181560-a8df1800e501?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: 1999,
    rating: 4.3,
  },
  {
    title: "Hair Dryer 2000W",
    description: "Fast drying with heat protection technology.",
    images: ["https://images.unsplash.com/photo-1727364438136-6edc10ef0a52?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
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
