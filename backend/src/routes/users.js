var express = require('express')
const User = require('../models/user')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  //TODO remove the hardcoded users list
  const peter = new User('peter')
  const shairru = new User('shairru')
  const usersList = [peter, shairru]
  res.send(usersList)
})

module.exports = router
