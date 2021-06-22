const express = require('express')
const { getCurrent } = require('../controllers/current.controller')

const currentRouter = express.Router();

currentRouter.get( '/:city?' , getCurrent )

module.exports = { 
    currentRouter
}