const express = require('express');
const Task = require('../models/task');
const User = require('../models/user');
const router = express.Router();

// create the following endpoints:
// //\tasks - list all tasks
// GET - shows all tasks
router.get('/', async (req, res, next) => {
  const tasks = await Task.find(
    //TODO assignee has req.user._id in an array
    { assignedto: req.user._id }
  );

  // console.log(tasks)
  res.send(tasks);
});
// POST: /tasks - created a new task

router.post('/', async (req, res) => {
  const { title, description, status, priority, category, effort, assignedTo, deadline } = req.body;
  const createdbyId = await User.findOne({ name: createdby })._id;
  const createdOn = Date.now();

  const task = new Task({
    title: title,
    description: description,
    status: status,
    priority: priority,
    category: category,
    effort: effort,
    assignedTo: assignedTo,
    deadline: deadline,
    createdby: createdbyId,
    createdOn: createdOn,
  });
  await task.save();

  res.send(task);
});

//PUT: /tasks/<id> - updates a task with <id>

router.put('/:id', (req, res) => {
  // const task = TASK.findOne(id=req.params.id)
  // edit the task
  // task.desciption = req.body.description
  // task.save
  // res.send(task)

  res.send('requests ID' + req.params.id);
});

//to get information on one single task
router.get('/:id', (req, res) => {
  // const task = TASK.findOne(id=req.params.id)
  // send back task
  res.send('requests ID' + req.params.id);
});

//DELETE: /tasks/<id> - deletes a task with <id>
router.delete('/:id', (req, res) => {
  // const task = TASK.findOne(id=req.params.id)
  // delete one element/task
  // task.delete
  // res.save(task)
  //sending 200 if everything is ok);;
  res.send('OK');
});

module.exports = router;
