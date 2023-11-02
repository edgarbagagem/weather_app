const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/auth')

//register
router.post('/register', controller.register);

//login
router.post('/login', passport.authenticate('local', { failureMessage: 'Invalid email or password' }), (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        createdAt: req.user.createdAt,
    }
    res.send(user);
})

//logout
router.post('/logout', controller.logout);


module.exports = router