import express from 'express';
import {verifyToken} from "../middleware/jwt.js";
import { getOrders, intent, confirmOrder} from "../controllers/order.controller.js"

const router = express.Router();

// router.post("/:serviceId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirmOrder);


export default router;