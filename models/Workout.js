const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date, 
    default: Date.now
  },
  exercises: [
    {
    type: {
      type: String,
      required: "Workout type required",
    },
    name: {
      type: String,
      required: "Workout name required",
    },
    duration: {
      type: Number,
      required: "Workout duration required",
    },
    weight: Number,
    sets: Number,
    reps: Number,
    distance: Number
  }
]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;