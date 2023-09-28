const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const { reset } = require('nodemon');
const router = express.Router();

//create register functionality for user

router.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  const newUser = new User({
    username: username,
    email: email,
  });
  User.register(newUser, password, (err, user) => {
    if (err) {
      return res.json({ user, err });
    } else {
      passport.authenticate('local')(req, res, () => {
        return res.json({ user: user });
      });
    }
  });
});

//create login functionality for user
//POST: /session/login

router.post('/login', passport.authenticate('local', { failWithError: true }), (req, res, next) => {
  res.send(req.user);
});

//create logout functionality for user
//GET: /session/logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.sendStatus(200); // Successful logout
  });
});

router.get('/', (req, res) => {
  res.send(req.user);
});

module.exports = router;
