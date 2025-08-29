const express = require('express');
const {bookAppointment,getAppointment,updateStatus,getPatientAppointment,getAllAppointmentsForUser} = require('../controllers/appointmentController');
const {verifyUser, verifyDoctor} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book',verifyUser,bookAppointment);
// router.put('/confirm/:id',confirmAppointment);
router.get('/doctor/getappointment',verifyDoctor,getAppointment);  // ✅ Get Appointment by Doctor for particular doctor
// router.put('/:id/status',,updateStatus);
router.put("/:id/status", (req, res, next) => {
  console.log("🚀 Route HIT:", req.params, req.body);
  next();
}, updateStatus);
router.get("/User/all", getAllAppointmentsForUser);

router.get('/patient/status/',verifyUser,getPatientAppointment);

module.exports = router;