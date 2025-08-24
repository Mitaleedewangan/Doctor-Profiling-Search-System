const express  =require('express');
const{registerDoctor,loginDoctor,getDoctorProfile,updateDoctorProfile,searchDoctor,getDoctorById,addDoctor} = require('../controllers/doctorController');
// const {verifyDoctor}  = require('../middleware/authMiddleware');
const {protectDoctor} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register',registerDoctor);
router.post('/login',loginDoctor);
router.get('/profile',protectDoctor ,getDoctorProfile);
router.put('/update/profile',protectDoctor,updateDoctorProfile);
router.get('/search',searchDoctor);
router.post('/addDoctor',addDoctor);
router.get("/:id",getDoctorById);



module.exports = router;