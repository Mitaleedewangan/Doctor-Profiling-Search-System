const express  =require('express');
const{registerDoctor,loginDoctor,getDoctorProfile,updateDoctorProfile,searchDoctor,getDoctorById,addDoctor, deleteDoctor} = require('../controllers/doctorController');
// const {verifyDoctor}  = require('../middleware/authMiddleware');
const {verifyToken} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register',registerDoctor);
router.post('/login',loginDoctor);
router.get('/profile',verifyToken ,getDoctorProfile);
router.put('/update/profile',verifyToken,updateDoctorProfile);
router.get('/search',searchDoctor);
router.post('/addDoctor',addDoctor);
router.get("/:id",getDoctorById);
router.delete("/delete/:id",verifyToken,deleteDoctor);



module.exports = router;