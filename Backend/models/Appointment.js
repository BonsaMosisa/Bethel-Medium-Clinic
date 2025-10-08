// models/Appointment.js
import pool from "../config/database.js";

class Appointment {
  // Create new appointment
  static async create(appointmentData) {
    const {
      user_id,
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
    } = appointmentData;

    const [result] = await pool.execute(
      `INSERT INTO appointments 
       (user_id, patient_name, patient_email, patient_phone, patient_age, patient_gender, appointment_type, preferred_date, preferred_time, symptoms, medical_history, insurance_info, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id,
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
      ]
    );

    return result.insertId;
  }

  // Get appointments by user ID
  static async findByUserId(userId) {
    const [rows] = await pool.execute(
      `SELECT * FROM appointments 
       WHERE user_id = ? 
       ORDER BY preferred_date DESC, preferred_time DESC`,
      [userId]
    );
    return rows;
  }

  // Get appointment by ID
  static async findById(id) {
    const [rows] = await pool.execute(
      `SELECT a.*, u.first_name, u.last_name, u.email as user_email 
       FROM appointments a 
       JOIN users u ON a.user_id = u.id 
       WHERE a.id = ?`,
      [id]
    );
    return rows[0];
  }

  // Update appointment status
  static async updateStatus(id, status) {
    const [result] = await pool.execute(
      "UPDATE appointments SET status = ? WHERE id = ?",
      [status, id]
    );
    return result.affectedRows > 0;
  }

  // Get appointments by date range (for staff)
  static async findByDateRange(startDate, endDate) {
    const [rows] = await pool.execute(
      `SELECT a.*, u.first_name, u.last_name, u.phone as user_phone 
       FROM appointments a 
       JOIN users u ON a.user_id = u.id 
       WHERE a.preferred_date BETWEEN ? AND ? 
       ORDER BY a.preferred_date, a.preferred_time`,
      [startDate, endDate]
    );
    return rows;
  }
}

export default Appointment;
