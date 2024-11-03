const express = require('express');
const Task = require('../models/Tasks');

const router = express.Router();

// Create a new task

router.post('/', async (req, res) => {
    const { taskname } = req.body;
    const task = new Task({ taskname });
    console.log(taskname)
    try {
        await task.save();
        res.status(201).json(task);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
})


module.exports = router