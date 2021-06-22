const fetch = require('node-fetch')

const getForecastForCity = async (city) => {
  try {
    if (!city) {
      return 'Not Provide City'
    }
    const url = process.env.OPEN_WEATHER_URL + `forecast?q=${city}&appid=` + process.env.OPEN_WEATHER_KEY
    const response = await fetch(url)
    const json = await response.json()
    if (json.cod === '404') {
      return json.message
    }
    return json
  } catch (error) {
    return null
  }
}

module.exports = {
  getForecastForCity
}
