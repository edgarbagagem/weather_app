const express = require('express')
const router = express.Router()

const controller = require('../controllers/weather')

//get current weather for city
router.get('/:city', controller.getWeather)

//get 5 day forecast for city
router.get('/forecast/:city', controller.getForecast)

module.exports = router