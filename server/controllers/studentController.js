const Student = require('../models/studentModel')

const registerStudent = async (req, res) => {
    try {
        const { name, githubProfile, subject } = req.body;

        const githubUsername = githubProfile.split('github.com/')[1];

        const existingStudent = await Student.findOne({
            githubUsername
        })
        if (existingStudent) return res.status(400).json({
            message: 'Student already registered'
        })

        const student = await Student.create({
            name,
            githubProfile,
            githubUsername,
            subject
        })

        res.status(201).json({
            message: 'Student Registered',
            student
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {
    registerStudent, getAllStudents
}