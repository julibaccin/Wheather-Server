const fetch = require('node-fetch')

const getCurrentWeatherForCity = async (city) => {
  try {
    const url = process.env.OPEN_WEATHER_URL + `weather?q=${city}&appid=` + process.env.OPEN_WEATHER_KEY
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

module.exports = {
  getCurrentWeatherForCity
}
