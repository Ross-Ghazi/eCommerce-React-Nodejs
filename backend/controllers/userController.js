import express from "express";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

//fetch auth user and get Token, public
const authUser = asyncHandler(async (req, res) => {
  let { username, email, password } = req.body;

  if (!email) {
    email = username;
  }

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

//Register, public
const reisterUser = asyncHandler(async (req, res) => {
  let { name, email, password, username } = req.body;
  if (!email) {
    email = username;
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User alreasy exist");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

//get user profile, private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//update user profile, private
//put/api/users/update
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.password) {
      user.password = req.body.password;
    }

    const updateduser = await user.save();

    res.status(201).json({
      _id: updateduser._id,
      name: updateduser.name,
      email: updateduser.email,
      isAdmin: updateduser.isAdmin,
      token: generateToken(updateduser._id),
    });
  } else {
    res.status(401);
    throw new Error("User Not found");
  }
});

export { authUser, getUserProfile, reisterUser, updateUserProfile };
