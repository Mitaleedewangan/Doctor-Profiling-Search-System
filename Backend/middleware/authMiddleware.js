// const jwt = require("jsonwebtoken");
// const Doctor = require("../models/doctorModel");

// exports.verifyToken = async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       // Extract token after "Bearer "
//       token = req.headers.authorization.split(" ")[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Attach doctor data (without password) to request
//       req.doctor = await Doctor.findById(decoded.id).select("-password");

//       if (!req.doctor) {
//         return res.status(404).json({ message: "Doctor not found" });
//       }

//       next();
//     } catch (err) {
//       return res.status(401).json({ message: "Invalid or expired token" });
//     }
//   } else {
//     return res.status(401).json({ message: "No token provided" });
//   }
// };

const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");

// exports.verifyDoctor = async (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.doctor = await Doctor.findById(decoded.id).select("-password");
//      if (!req.doctor) return res.status(404).json({ message: "Doctor not found" });
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Token invalid" });
//   }
// };

exports.verifyDoctor = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1]; // ✅ extract only token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const doctor = await Doctor.findById(decoded.id).select("-password");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    req.doctor = doctor;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid", error: err.message });
  }
};



// exports.verifyUser = async (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token) return res.status(401).json({ message: "No token, authorization denied" });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = await User.findById(decoded.id).select("-password");

//         if (!req.user) return res.status(404).json({ message: "User not found" });
//         req.user = User;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: "Token invalid" });
//     }
// };  

exports.verifyUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        req.user = user; // ✅ attach actual user object
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token invalid", error: err.message });
    }
};

exports.protectDoctor = async (req,res,next)=>{
    let token;

    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")

    ){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.doctor = await Doctor.findById(decoded.id).select("-password");

            if(!req.doctor){
                return res.status(404).json({message:"Doctor not found"});
            }

            next();

        }
        catch(error){
            console.error(error);
            return res.status(401).json({message:"Not authorized , token failed"});

        }
    }
        else{
                return res.status(401).json({message:"No token , authorized denied"});
        }
    };
