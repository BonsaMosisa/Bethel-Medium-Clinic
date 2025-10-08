// routes/authRoutes.js
import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/register", validateRegistration, register);
router.post("/login", validateLogin, login);
router.get("/me", protect, getMe);

export default router;
