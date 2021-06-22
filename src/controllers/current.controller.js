const { getCityForIp } = require('../helpers/getCityForIp.js')
const { getCurrentWeatherForCity } = require('../helpers/getCurrentWeatherForCity.js')

const getCurrent = async (req, res) => {
  const { city } = req.params
  let data
  if (city) {
    data = await getCurrentWeatherForCity(city)
  } else {
    const city = await getCityForIp(req.ip)
    console.log('Ciudad', city)
    if (!city) return res.status(404).json({ data: 'Not Found City For Ip' })
    data = await getCurrentWeatherForCity(city)
  }

  res.status(200).json(data)
}

module.exports = {
  getCurrent
}
