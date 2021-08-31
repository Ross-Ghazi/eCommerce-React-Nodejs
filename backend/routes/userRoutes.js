import express from "express";
import {
  authUser,
  getUserProfile,
  reisterUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// oneway
// router.get("/", getProducts);
router.route("/").post(reisterUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
