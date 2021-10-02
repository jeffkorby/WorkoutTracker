const router = require('express').Router();
const path = require('path');
const Workout = require('../models/workout');

// routes
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/exercise.html'))
})

router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/stats.html'))
})

router.get('/api/workouts', async (req, res) => {
    try {
        //////////////
    }
})


module.exports = router;