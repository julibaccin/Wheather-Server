const fetch = require('node-fetch')

const getForecastForCity = async (city) => {
  try {
    const url = process.env.OPEN_WEATHER_URL + `forecast?q=${city}&appid=` + process.env.OPEN_WEATHER_KEY
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

module.exports = {
  getForecastForCity
}
