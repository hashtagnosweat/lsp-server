const mongoose = require('mongoose');


const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't be blank"]
      },    
})

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course