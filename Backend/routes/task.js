// routes/tasks.js

const express = require('express');
const router = express.Router();
const Conversation = require('../models/task');

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Conversation.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new task
router.post('/conversations', async (req, res) => {
  try {
    const newConversation = new Conversation(req.body);
    console.log(req.body);
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = router;
