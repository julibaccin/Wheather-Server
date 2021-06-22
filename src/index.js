require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Routes
const { locationRouter } = require('./routes/location.routes.js')
const { forecastRouter } = require('./routes/forecast.routes.js')
const { currentRouter } = require('./routes/current.routes.js')

const server = express()

// Config
server.set('port', process.env.PORT || 3000)

// Middlewares
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.set('trust proxy', true)

// Routes
server.use('/v1/location', locationRouter)
server.use('/v1/current', currentRouter)
server.use('/v1/forecast', forecastRouter)

// Start
server.listen(server.get('port'), () => {
  console.log('Server on port ' + server.get('port'))
})
