if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const port = process.env.BACKEND_PORT
const endpoint = process.env.OPEN_WEATHER_API_ENDPOINT
const key = process.env.OPEN_WEATHER_API_KEY
const databaseURL = process.env.DATABASE_URL
const secretKey = process.env.SESSION_SECRET

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
}))

const initializePassport = require('./config/passport-config')
initializePassport(passport)

app.use(passport.initialize())
app.use(passport.session())

const weatherRouter = require('./routes/weather')
app.use('/weather', weatherRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

mongoose.connect(databaseURL)
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})