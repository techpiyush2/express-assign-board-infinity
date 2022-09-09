const mongoose = require('mongoose');

const studenSchema = new mongoose.Schema({
    studentFirstName : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    }
},{timestamp : true})

module.exports = new mongoose.model('student',studenSchema)
