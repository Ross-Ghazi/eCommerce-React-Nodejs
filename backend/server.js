const express = require("express");
const products = require("./data/products");

app = express();
app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server is Running at port 5000"));
