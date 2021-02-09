const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
db.Workout.aggregate({
  $addFields: {
    totalDuration: { 
      $sum: "$exercises.duration" }
  }
})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.post("/api/workouts", (req, res) => {
db.Workout.create({})
  .then((data) => 
    res.json(data))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;