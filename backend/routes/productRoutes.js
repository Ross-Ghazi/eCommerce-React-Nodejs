import express from "express";
import {
  getProducts,
  getProductByID,
} from "../controllers/productContoller.js";
const router = express.Router();

// oneway
// router.get("/", getProducts);
router.route("/").get(getProducts);
router.route("/:id").get(getProductByID);

export default router;
