const express = require('express');
const Task = require('../models/Tasks');

const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
    const { taskname } = req.body;
    const task = new Task({ taskname });
    try {
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            return res.status(404).json({ message: 'No tasks found' });
        }
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: error.message });
    }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const updatedTask = req.body; 
    console.log(updatedTask)

    try {
        const task = await Task.findByIdAndUpdate(id, updatedTask, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task); // Respond with the updated task
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
