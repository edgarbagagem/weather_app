const User = require('../models/user');
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


module.exports = class AuthController {

    static async register(req, res) {
        const data = req.body

        try {

            if (data.name === undefined || data.password === undefined) {
                return res.status(400).send({ error: 'Required fields empty' })
            }

            if (!emailRegex.test(data.email)) {
                return res.status(400).send({ error: 'Invalid email' })
            } else if (await User.findOne({ email: data.email })) {
                return res.status(400).send({ error: 'A user already exists with that email' })
            }

            const user = await User.create(data);
            user.password = undefined;

            return res.send({ user })
        }
        catch (e) {
            res.status(500).send({ error: 'Registation failed: ' + e })
        }
    }

    static async logout(req, res) {
        try {
            res.clearCookie('connect.sid')
            return res.send(req.user);
        } catch (error) {
            return res.status(500).send({ error: 'Logout error' });
        }
    }
}