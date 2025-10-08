// controllers/userController.js
import User from "../models/User.js";

export const updateProfile = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone,
      date_of_birth,
      gender,
      address,
      emergency_contact_name,
      emergency_contact_phone,
    } = req.body;

    const updateData = {
      first_name,
      last_name,
      phone,
      date_of_birth,
      gender,
      address,
      emergency_contact_name,
      emergency_contact_phone,
    };

    const updated = await User.update(req.user.id, updateData);

    if (!updated) {
      return res.status(400).json({
        success: false,
        message: "No valid fields to update",
      });
    }

    const user = await User.findById(req.user.id);

    res.json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
    });
  }
};
