const express = require('express');
const User = require('../models/user');

const router = express.Router();

// create the following endpoints for \users:

// GET - lists all users
router.get('/', async function (req, res, next) {
  const users = await User.find();

  console.log(users);
  res.send(users);
});

// POST - Create user
router.post('/', async function (req, res) {
  const { name } = req.body;
  const user = new User({ name });
  // User.list.push(user)
  await user.save();

  res.send(user);
});

// \users\<id>

// GET - Shows user with <id></id>

/* GET users listing. */

// create a route to create a user

module.exports = router;
