const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel.js");
const User = require("../models/userModel.js");

exports.verifyToken = async (req, res, next) => {
  console.log("Middleware: Verifying token...");

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer <token>"

  console.log("Headers:", req.headers);
  console.log("Auth Header:", authHeader);

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified! Payload:", decoded);

    // Try to find in Doctor model
    let doctor = await Doctor.findById(decoded.id).select("-password");
    if (doctor) {
      req.doctor = doctor;
      return next();
    }

    // Try to find in User model
    let user = await User.findById(decoded.id).select("-password");
    if (user) {
      req.user = user;
      return next();
    }

    return res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.error("JWT Error:", err);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};



