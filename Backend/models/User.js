import pool from "../config/database.js";

class User {
  // Create new user
  static async create(userData) {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      date_of_birth,
      gender,
      address,
      emergency_contact_name,
      emergency_contact_phone,
    } = userData;

    const [result] = await pool.execute(
      `INSERT INTO users 
       (first_name, last_name, email, phone, password, date_of_birth, gender, address, emergency_contact_name, emergency_contact_phone) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name,
        last_name,
        email,
        phone,
        password,
        date_of_birth,
        gender,
        address,
        emergency_contact_name,
        emergency_contact_phone,
      ]
    );

    return result.insertId;
  }

  // Find user by email
  static async findByEmail(email) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }

  // Find user by ID
  static async findById(id) {
    const [rows] = await pool.execute(
      "SELECT id, first_name, last_name, email, phone, date_of_birth, gender, address, emergency_contact_name, emergency_contact_phone, created_at FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  // Update user profile
  static async update(id, updateData) {
    const allowedFields = [
      "first_name",
      "last_name",
      "phone",
      "date_of_birth",
      "gender",
      "address",
      "emergency_contact_name",
      "emergency_contact_phone",
    ];
    const fieldsToUpdate = {};

    allowedFields.forEach((field) => {
      if (updateData[field] !== undefined) {
        fieldsToUpdate[field] = updateData[field];
      }
    });

    if (Object.keys(fieldsToUpdate).length === 0) {
      return null;
    }

    const setClause = Object.keys(fieldsToUpdate)
      .map((field) => `${field} = ?`)
      .join(", ");
    const values = [...Object.values(fieldsToUpdate), id];

    const [result] = await pool.execute(
      `UPDATE users SET ${setClause} WHERE id = ?`,
      values
    );

    return result.affectedRows > 0;
  }
}

export default User;
