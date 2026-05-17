const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    githubUsername: {
        type: String,
        required: true,
        unique: true
    }

});

module.exports = mongoose.model("Student", studentSchema);