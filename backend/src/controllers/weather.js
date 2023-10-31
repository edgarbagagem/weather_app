const axios = require('axios')
require('dotenv').config()

const endpoint = process.env.OPEN_WEATHER_API_ENDPOINT
const key = process.env.OPEN_WEATHER_API_KEY

function getDirection(angle) {
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
}


module.exports = class weatherController {


    static async getWeather(req, res) {
        const city = req.params.city
        await axios.get(`${endpoint}weather?id=${city}&APPID=${key}`, { headers: { 'Content-type': 'application/json' } })
            .then(function (response) {
                let weather = {
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description,
                    temp: (response.data.main.temp - 273.15).toFixed(0),
                    temp_min: (response.data.main.temp_min - 273.15).toFixed(0),
                    temp_max: (response.data.main.temp_max - 273.15).toFixed(0),
                    feels_like: (response.data.main.feels_like - 273.15).toFixed(0),
                    humidity: response.data.main.humidity,
                    wind_speed: response.data.wind.speed,
                    wind_degree: getDirection(response.data.wind.deg),
                }
                res.send(weather)
            })
            .catch(function (error) {
                res.status(400).send({ error: `Weather API Error ${error}` })
            })
    }


    static async getForecast(req, res) {
        const city = req.params.city
        await axios.get(`${endpoint}forecast?id=${city}&APPID=${key}`, { headers: { 'Content-type': 'application/json' } })
            .then(function (response) {
                let forecast = []
                response.data.list.forEach(el => {
                    forecast.push(
                        {
                            main: el.weather[0].main,
                            description: el.weather[0].description,
                            temp: (el.main.temp - 273.15).toFixed(0),
                            temp_min: (el.main.temp_min - 273.15).toFixed(0),
                            temp_max: (el.main.temp_max - 273.15).toFixed(0),
                            feels_like: (el.main.feels_like - 273.15).toFixed(0),
                            humidity: el.main.humidity,
                            wind_speed: el.wind.speed,
                            wind_degree: getDirection(el.wind.deg),
                            dateTime: el.dt_txt,
                        }
                    )
                })
                res.send(forecast)
            })
            .catch(function (error) {
                res.status(400).send({ error: `Forecast API Error ${error}` })
            })
    }
}