// middleware/validationMiddleware.js
import { body, validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation errors",
      errors: errors.array(),
    });
  }
  next();
};

// User registration validation
export const validateRegistration = [
  body("first_name")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters"),
  body("last_name")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters"),
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("phone").notEmpty().withMessage("Phone number is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  handleValidationErrors,
];

// User login validation
export const validateLogin = [
  body("email").isEmail().withMessage("Please provide a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
  handleValidationErrors,
];

// Appointment validation
export const validateAppointment = [
  body("patient_name").notEmpty().withMessage("Patient name is required"),
  body("patient_email").isEmail().withMessage("Please provide a valid email"),
  body("patient_phone").notEmpty().withMessage("Phone number is required"),
  body("appointment_type")
    .isIn(["checkup", "consultation", "emergency", "followup", "other"])
    .withMessage("Invalid appointment type"),
  body("preferred_date").isDate().withMessage("Please provide a valid date"),
  body("preferred_time")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Please provide a valid time"),
  handleValidationErrors,
];
