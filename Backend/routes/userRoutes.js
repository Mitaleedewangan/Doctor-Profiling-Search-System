const express = require('express');
const {registerUser,loginUser,UsergetById} = require('../controllers/userController');
const {verifyToken} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);  
 router.get("/:id",UsergetById);


module.exports = router;