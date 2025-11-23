import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { default as Product } from "./model/Product.js";

const app = express();
app.use(json());
app.use(cors());

// Connect MongoDB
connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/",(req,res)=>{
  res.send("Hello")
})

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Start Server j
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
