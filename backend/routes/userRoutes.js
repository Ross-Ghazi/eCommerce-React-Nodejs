import express from "express";
import {
  authUser,
  getUserProfile,
  reisterUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// oneway
// router.get("/", getProducts);
router.route("/register").post(reisterUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/profile/update").put(protect, updateUserProfile);

export default router;
