const { getCityForIp } = require('../helpers/getCityForIp.js')

const getLocation = async (req, res) => {
  if (!req.ip) {
    res.status(400).json({ error: "We can't get your ip" })
  }

  const city = await getCityForIp(req.ip)

  if (!city) return res.status(404).json({ error: 'Not Found City For Ip' })

  return res.json({ data: city })
}

module.exports = {
  getLocation
}
