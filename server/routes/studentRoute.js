const express = require("express");

const {
    registerStudent,
    getAllStudents
} = require("../controllers/studentController");

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/", registerStudent);

router.get("/",
    authMiddleware,
    getAllStudents
);

module.exports = router;
