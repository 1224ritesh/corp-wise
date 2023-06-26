import express from 'express';
import { deleteUser, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete("/:id",verifyToken, deleteUser);

// this route is for getting a user by id 
router.get("/:id", getUser);

export default router;