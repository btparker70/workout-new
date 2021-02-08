const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// name, type, weight, sets, reps, and duration
const WorkoutSchema = new Schema({
  day: {
    type: Date, 
    default: Date.now
  },
  exercise: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;