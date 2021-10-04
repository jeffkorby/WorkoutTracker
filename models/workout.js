const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        name: {
            type: String,
            trim: true
        },
        type: {
            type: String,
            trim: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number
        }
    }],
     
    day: {
        type: Date,
        default: Date.now
    },  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;