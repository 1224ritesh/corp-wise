import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import {
    createConversation,
    getConversations,
    getSingleConversation,
    updateConversation
} from "../controllers/converstation.controller.js"

const router = express.Router();

router.get("/", verifyToken, createConversation);
router.get("/", verifyToken, getConversations);
router.get("/single/:id", verifyToken, getSingleConversation);
router.get("/:id", verifyToken, updateConversation);

export default router;