import express from "express";
import { authUser } from "../controllers/userController.js";
const router = express.Router();

// oneway
// router.get("/", getProducts);
router.route("/login").post(authUser);

export default router;
