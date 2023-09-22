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
// POST - Add new tasks
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

  res.send(task);
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
