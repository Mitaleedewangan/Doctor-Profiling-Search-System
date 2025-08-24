const express = require('express');
const {bookAppointment,confirmAppointment,getAppointment,updateStatus,getPatientAppointment} = require('../controllers/appointmentController');
const {verifyUser} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book',verifyUser,bookAppointment);
router.put('/confirm/:id',confirmAppointment);
router.get('/user/getappointment',getAppointment);
router.put('/:id/status',updateStatus);
router.get('/patient/status/',verifyUser,getPatientAppointment);

module.exports = router;