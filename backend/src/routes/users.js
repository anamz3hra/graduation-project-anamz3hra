var express = require('express')
const User = require('../models/user')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(User.list)
})

//create a route to create a user
router.post('/', function (req, res) {
  //console.log(req.body)
  const user = new User(req.body.name)
  User.list.push(user)
  user.addTask(req.body.tasks)
  res.send(user)
})

module.exports = router
