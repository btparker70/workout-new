const db = require("../models");
const router = require("express").Router();

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
    console.log(err);
    res.json(err);
  });
});

// Create new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
      .then(dbWorkout => {
        console.log(dbWorkout);
          res.json(dbWorkout);
      })
      .catch(err => {
        console.log(err);
          res.json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    {
      new: true,
      runValidators: true
    }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    }
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workouts) => {
      res.json(workouts);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;