const express = require('express')
const { getLocation } = require( '../controllers/location.controller.js')

const locationRouter = express.Router();

locationRouter.get( '' , getLocation )

module.exports = {
    locationRouter
}
