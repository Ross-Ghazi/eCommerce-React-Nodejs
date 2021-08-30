const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");

dotenv.config();
app = express();
app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is Running on ${process.env.NODE_ENV} mode port ${PORT}`)
);
