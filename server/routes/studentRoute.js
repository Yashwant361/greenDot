const express = require("express");

const {
   registerStudent,
   getAllStudents
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", registerStudent);

router.get("/", getAllStudents);

module.exports = router;
