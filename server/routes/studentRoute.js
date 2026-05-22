const express = require("express");

const {
    registerStudent,
    getAllStudents,
    deleteAllStudents
} = require("../controllers/studentController");

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/", registerStudent);

router.get("/",
    authMiddleware,
    getAllStudents
);

router.delete("/all", authMiddleware, deleteAllStudents)

module.exports = router;
