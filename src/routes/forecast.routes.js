const express = require('express')
const { getForecast } = require( '../controllers/forecast.controller.js')

const forecastRouter = express.Router();

forecastRouter.get( '/:city?' , getForecast )

module.exports = {
    forecastRouter
}
