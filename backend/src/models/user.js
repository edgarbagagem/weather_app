const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
})

userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 5);
    this.password = hash;
    next();
});

const User = mongoose.model('User', userSchema)

module.exports = User