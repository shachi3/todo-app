const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Create a new to-do item
router.post('/todo', async (req, res) => {
 const { title, startDate, endDate } = req.body;
 try {
  const newTodo = new Todo({
   title,
   startDate,
   endDate
  });
  const todo = await newTodo.save();
  res.json(todo);
 } catch (err) {
  res.status(500).send('Server Error');
 }
});

// List all to-do items
router.get('/todos', async (req, res) => {
 try {
  const todos = await Todo.find();
  res.json(todos);
 } catch (err) {
  res.status(500).send('Server Error');
 }
});

// Edit a specific to-do item
router.put('/todo/:id', async (req, res) => {
 const { title, startDate, endDate } = req.body;
 try {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
   return res.status(404).json({ msg: 'Todo not found' });
  }
  todo.title = title || todo.title;
  todo.startDate = startDate || todo.startDate;
  todo.endDate = endDate || todo.endDate;
  await todo.save();
  res.json(todo);
 } catch (err) {
  res.status(500).send('Server Error');
 }
});

module.exports = router;
