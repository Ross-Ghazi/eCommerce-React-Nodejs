import express from "express";
import User from "../models/userModel.js";
import AsyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//fetch auth user and get Token, public
const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
