const { getCityForIp } = require('../helpers/getCityForIp.js')
const { getForecastForCity } = require('../helpers/getForecastForCity.js')

const getForecast = async (req, res) => {
  try {
    const { city } = req.params
    let data
    if (city) {
      data = await getForecastForCity(city)
      return res.status(200).json({ data })
    }
    const cityName = await getCityForIp(req.ip)
    data = await getForecastForCity(cityName)
    return res.status(200).json({ data })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getForecast
}
