const db = require("../models");
const router = require("express").Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId();
const mongojs = require("mongojs");

// Get all workouts
router.get("/api/workouts", (req, res) => {
db.Workout.aggregate([{
  $addFields: {
    totalDuration: { 
      $sum: "$exercises.duration" }
  }
}])
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// Create new workout
router.post("/api/workouts", (req, res) => {
db.Workout.create({})
  .then((dbWorkout) => 
    res.json(dbWorkout))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: req.body } }, { new: true })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;