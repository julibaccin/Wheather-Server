const fetch = require('node-fetch')

const getCityForIp = async (ip) => {
  try {
    const url = process.env.IP_API_URL
    const response = await fetch(url + ip)
    const json = await response.json()
    if (!json.city) {
      return null
    }
    return json.city
  } catch (error) {
    console.log(error.message)
    return null
  }
}

module.exports = {
  getCityForIp
}
