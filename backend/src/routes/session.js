const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

//create register functionality for user
router.post('/register', (req, res, next) => {
  const { email, password } = req.body;
  User.register({ email }, password, (err, user) => {
    if (err) {
      return res.json({ user, err });
    }
    user.username = req.body.username;
    user.save();
    passport.authenticate('local')(req, res, () => {
      res.json({ user });
    });
  });
});

// POST to session/ with email and password.
// router.post('/', passport.authenticate('local', { failWithError: true }), function (req, res) {
//     res.send(req.user);
//   });

//create login functionality for user
//POST: /session/login
router.post('/login', (req, res, next) => {
  res.send('not implemented yet');
});

//create logout functionality for user
//GET: /session/logout
router.get('/logout', (req, res, next) => {
  res.send('not implemented yet');
});

module.exports = router;
