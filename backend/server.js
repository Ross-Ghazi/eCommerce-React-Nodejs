import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, ErrorHandler } from "./middleware/ErrormMiddleware.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

//midleware
app.use(notFound);
app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server is Running on ${process.env.NODE_ENV} mode port ${PORT}`)
);
