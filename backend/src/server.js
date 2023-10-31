const express = require('express')
require('dotenv').config()

const port = process.env.BACKEND_PORT
const endpoint = process.env.OPEN_WEATHER_API_ENDPOINT
const key = process.env.OPEN_WEATHER_API_KEY

const app = express()
app.use(express.urlencoded({ extended: false }))

const weatherRouter = require('./routes/weather')
app.use('/weather', weatherRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})