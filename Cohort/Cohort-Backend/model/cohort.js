const mongoose = require('mongoose')


const cohortSchema = new mongoose.Schema({
    teamName: {
        type: String,
        // required: true,
        unique: true 
    },
    students: {
        type: [String],
        // required: true
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        lowercase: true  
    },
    studentsCount: {
        type: Number,
        // required: true,
        min: 1,
        max: 3
    },
    phoneNumber: {
        type: Number,
        // required: true 
    },
    collegeName: {
        type: String,
        // required: true,
    }
})

const cohort = mongoose.model('cohort', cohortSchema)

module.exports = cohort