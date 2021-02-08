
db.User.create({ name: "Jimmy Dunkis" })
.then(dbUser => {
  console.log(dbUser);
})
.catch(({ message }) => {
  console.log(message);
});

app.get("/workouts", (req, res) => {
db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

app.get("/user", (req, res) => {
db.User.find({})
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.json(err);
  });
});

app.post("/submit", ({ body }, res) => {
db.Workout.create(body)
  .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.json(err);
  });
});

app.get("/populateduser", (req, res) => {
db.User.find({})
  .populate("workouts")
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.json(err);
  });
});