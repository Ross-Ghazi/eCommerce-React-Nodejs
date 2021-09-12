import express from "express";
import Order from "../models/orderModel.js";
import AsyncHandler from "express-async-handler";

//create new order:
const addOrderItems = AsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order item");
    return;
  }
  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    shippingPrice,
    totalPrice,
    itemPrice,
    taxPrice,
  });
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
});

//getOrderById:
const getOrderById = AsyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order does not exist");
  }
});

//Get logged in user orders:
const getMyOrders = AsyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export { addOrderItems, getOrderById, getMyOrders };
