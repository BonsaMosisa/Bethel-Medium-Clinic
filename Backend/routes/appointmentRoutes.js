// routes/appointmentRoutes.js
import express from "express";
import {
  createAppointment,
  getUserAppointments,
  getAppointmentById,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";
import { validateAppointment } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/", protect, validateAppointment, createAppointment);
router.get("/", protect, getUserAppointments);
router.get("/:id", protect, getAppointmentById);

export default router;
