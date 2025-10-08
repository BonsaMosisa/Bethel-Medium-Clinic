// controllers/appointmentController.js
import Appointment from "../models/Appointment.js";
import EmailService from "../utils/emailService.js";

export const createAppointment = async (req, res) => {
  try {
    const {
      patient_name,
      patient_email,
      patient_phone,
      patient_age,
      patient_gender,
      appointment_type,
      preferred_date,
      preferred_time,
      symptoms,
      medical_history,
      insurance_info,
      notes,
    } = req.body;

    const appointmentData = {
      user_id: req.user.id,
      patient_name,
      patient_email,
      patient_phone,
      patient_age,
      patient_gender,
      appointment_type,
      preferred_date,
      preferred_time,
      symptoms,
      medical_history,
      insurance_info,
      notes,
    };

    // Create appointment in database
    const appointmentId = await Appointment.create(appointmentData);

    // Get complete appointment data
    const appointment = await Appointment.findById(appointmentId);

    // Send email notifications
    await EmailService.sendAppointmentNotification(appointment);
    await EmailService.sendAppointmentConfirmation(appointment);

    res.status(201).json({
      success: true,
      message: "Appointment request submitted successfully",
      appointment: {
        id: appointmentId,
        ...appointmentData,
        status: "pending",
      },
    });
  } catch (error) {
    console.error("Create appointment error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating appointment",
    });
  }
};

export const getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findByUserId(req.user.id);

    res.json({
      success: true,
      appointments,
    });
  } catch (error) {
    console.error("Get appointments error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching appointments",
    });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Check if appointment belongs to user
    if (appointment.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to access this appointment",
      });
    }

    res.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error("Get appointment error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching appointment",
    });
  }
};
