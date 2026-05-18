const express = require('express');

const {
    loginTeacher
} = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginTeacher);

module.exports = router