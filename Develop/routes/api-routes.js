const db = require("../models");
const apiRouter = require("express").Router();

apiRouter.get("/api/workouts", (req, res) => {
db.Workout.aggregate({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

apiRouter.post("/api/workouts", (req, res) => {
db.Workout.create({})
  .then((data) => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = apiRouter;