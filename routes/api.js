const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', async (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$duration" }
      }
    }
  ])
  .exec((err, workouts) => {
    if (err) {
      res.status(500).json(err)
    } 
    else {
      res.status(200).json(workouts)
    }
  })  
})

router.put('/api/workouts/:id', async (req, res) => {
  db.Workout.findByIdAndUpdate(
    {_id: req.params.id}, 
    {$push: {exercises: req.body}},
    {new: true},
    function (err, workouts){
      if (err){
        res.status(500).json(err)
      }
      else {
        res.status(200).json(workouts)
      }
    }
    )
})

router.post('/api/workouts', async (req, res) => {
  db.Workout.create(req.body, function (err, workouts){
    if (err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(workouts)
    }
  })
})

router.get('/api/workouts/range', async (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$duration" }
      }
    }
  ])
  .sort({ _id: -1 }).limit(7)
  .exec((err, workouts) => {
    if (err) {
      res.status(500).json(err)
    } 
    else {
      res.status(200).json(workouts)
    }
  })     
})

module.exports = router;