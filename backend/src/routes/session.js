const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// GET /session/new
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

module.exports = router;
