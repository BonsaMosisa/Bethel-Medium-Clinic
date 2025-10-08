// utils/emailService.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  // Send appointment notification to clinic staff
  async sendAppointmentNotification(appointmentData) {
    const staffEmails = process.env.CLINIC_STAFF_EMAILS.split(",");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: staffEmails,
      subject: `New Appointment Request - ${appointmentData.patient_name}`,
      html: this.generateAppointmentEmailHTML(appointmentData),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log("Appointment notification email sent to staff");
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  }

  // Send confirmation email to patient
  async sendAppointmentConfirmation(appointmentData) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: appointmentData.patient_email,
      subject: "Appointment Request Received - Bethel Medium Clinic",
      html: this.generateConfirmationEmailHTML(appointmentData),
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log("Appointment confirmation email sent to patient");
      return true;
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      return false;
    }
  }

  generateAppointmentEmailHTML(appointmentData) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .detail { margin: 10px 0; }
          .label { font-weight: bold; color: #374151; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Appointment Request</h1>
          </div>
          <div class="content">
            <h2>Patient Information</h2>
            <div class="detail"><span class="label">Name:</span> ${
              appointmentData.patient_name
            }</div>
            <div class="detail"><span class="label">Email:</span> ${
              appointmentData.patient_email
            }</div>
            <div class="detail"><span class="label">Phone:</span> ${
              appointmentData.patient_phone
            }</div>
            <div class="detail"><span class="label">Age:</span> ${
              appointmentData.patient_age || "Not specified"
            }</div>
            <div class="detail"><span class="label">Gender:</span> ${
              appointmentData.patient_gender || "Not specified"
            }</div>
            
            <h2>Appointment Details</h2>
            <div class="detail"><span class="label">Type:</span> ${
              appointmentData.appointment_type
            }</div>
            <div class="detail"><span class="label">Preferred Date:</span> ${
              appointmentData.preferred_date
            }</div>
            <div class="detail"><span class="label">Preferred Time:</span> ${
              appointmentData.preferred_time
            }</div>
            
            <h2>Medical Information</h2>
            <div class="detail"><span class="label">Symptoms:</span> ${
              appointmentData.symptoms || "Not specified"
            }</div>
            <div class="detail"><span class="label">Medical History:</span> ${
              appointmentData.medical_history || "Not specified"
            }</div>
            <div class="detail"><span class="label">Insurance Info:</span> ${
              appointmentData.insurance_info || "Not specified"
            }</div>
            
            <h2>Additional Notes</h2>
            <div class="detail">${
              appointmentData.notes || "No additional notes"
            }</div>
            
            <p><em>This appointment request was submitted through the online booking system.</em></p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateConfirmationEmailHTML(appointmentData) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #10b981; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; }
          .detail { margin: 10px 0; }
          .label { font-weight: bold; color: #374151; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Request Received</h1>
          </div>
          <div class="content">
            <p>Dear ${appointmentData.patient_name},</p>
            
            <p>Thank you for choosing Bethel Medium Clinic. We have received your appointment request and will contact you shortly to confirm your appointment.</p>
            
            <h3>Your Appointment Details:</h3>
            <div class="detail"><span class="label">Appointment Type:</span> ${appointmentData.appointment_type}</div>
            <div class="detail"><span class="label">Preferred Date:</span> ${appointmentData.preferred_date}</div>
            <div class="detail"><span class="label">Preferred Time:</span> ${appointmentData.preferred_time}</div>
            
            <h3>What happens next?</h3>
            <ul>
              <li>Our staff will review your request and contact you within 24 hours</li>
              <li>We will confirm your appointment time and provide any necessary instructions</li>
              <li>If you have urgent medical needs, please call us directly at +251 XXX XXX XXX</li>
            </ul>
            
            <p><strong>Clinic Information:</strong><br>
            Bethel Medium Clinic<br>
            Main Street, Nekemte<br>
            East Wellega Zone, Oromia<br>
            Phone: +251 XXX XXX XXX<br>
            Emergency: +251 XXX XXX XXX</p>
            
            <p>Best regards,<br>
            The Bethel Medium Clinic Team</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

export default new EmailService();
