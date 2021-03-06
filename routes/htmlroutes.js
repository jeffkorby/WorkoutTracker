const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout");
const mongoose = require("mongoose");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router;