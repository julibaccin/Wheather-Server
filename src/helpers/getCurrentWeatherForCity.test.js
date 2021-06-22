/* eslint-env jest */

const { getCurrentWeatherForCity } = require('./getCurrentWeatherForCity.js')

describe('getCurrentWeahterForCity', () => {
  test('with city', async () => {
    expect(await getCurrentWeatherForCity('Venado Tuerto')).not.toBeNull()
    expect(await getCurrentWeatherForCity('Buenos Aires')).not.toBeNull()
    expect(await getCurrentWeatherForCity('Rosario')).not.toBeNull()
    expect(await getCurrentWeatherForCity('Bariloche')).not.toBeNull()
    expect(await getCurrentWeatherForCity('Madrid')).not.toBeNull()
  })

  test('invalid city', async () => {
    expect(await getCurrentWeatherForCity('As')).toContain('city not found')
    expect(await getCurrentWeatherForCity('2')).toContain('city not found')
    expect(await getCurrentWeatherForCity('')).toContain('Not Provide City')
    expect(await getCurrentWeatherForCity(null)).toContain('Not Provide City')
  })
})
