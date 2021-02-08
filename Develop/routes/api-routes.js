const db = require("../models");
const apiRouter = require("express").Router();

apiRouter.get("/workouts", (req, res) => {
db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// apiRouter.post("/submit", ({ body }, res) => {
// db.Workout.create(body)
//   .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//   .then(dbUser => {
//     res.json(dbUser);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

module.exports = apiRouter;