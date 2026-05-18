const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    githubProfile: {
        type: String,
        required: true
    },

    subject: {
        type: String,

        enum: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "MERN",
            "DSA",
            "Node.js",
            "MongoDB"
        ],

        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Student",
    studentSchema
);