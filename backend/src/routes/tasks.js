const express = require('express');
const Task = require('../models/task');
const User = require('../models/user');
const router = express.Router();

// create the following endpoints:
// //\tasks - list all tasks
// GET - shows all tasks
router.get('/', async function (req, res, next) {
  const tasks = await Task.find();

  // console.log(tasks)
  res.send(tasks);
});
// POST: /tasks - created a new task

router.post('/', async function (req, res) {
  const { name, title, description, status, deadline, createdby } = req.body;
  const createdbyId = await User.findOne({ name: createdby })._id;
  const task = new Task({
    title: title,
    description: description,
    status: status,
    deadline: deadline,
    createdby: createdbyId,
  });
  await task.save();

  res.send('needs to be implemented');
});

//GET: /tasks - shows all tasks for a specific user
router.get('/', (req, res) => {
  res.send('needs to be implemented');
});

//PUT: /tasks/<id> - updates a task with <id>
router.put('/:id', (req, res) => {
  res.send('requests ID' + req.params.id);
});

router.get('/:id', (req, res) => {
  res.send('requests ID' + req.params.id);
});

//DELETE: /tasks/<id> - deletes a task with <id>
router.delete('/:id', (req, res) => {
  res.send('requests ID' + req.params.id);
});

// Task.list.push(task)

// \tasks\<id>
// GET - Shows task with <id>
// PATCH - manipulate task with <id>/workspaces/graduation-project-anamz3hra/backend/src/tests
// DELETE - deletes task with <id>
// \users
// GET - Shows all users
// POST - Create user
// \users\<id>
// GET - Shows user with <id>

//create endpoints for tasks status

module.exports = router;
