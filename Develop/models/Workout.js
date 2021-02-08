const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// name, type, weight, sets, reps, and duration
const WorkoutSchema = new Schema({
  type: String,
  name: String,
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;