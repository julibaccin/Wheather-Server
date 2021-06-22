/* eslint-env jest */

const { getForecastForCity } = require('./getForecastForCity.js')

describe('getCurrentWeahterForCity', () => {
  test('valid city', async () => {
    expect(await getForecastForCity('Venado Tuerto')).not.toBeNull()
    expect(await getForecastForCity('Buenos Aires')).not.toBeNull()
    expect(await getForecastForCity('Rosario')).not.toBeNull()
    expect(await getForecastForCity('Bariloche')).not.toBeNull()
    expect(await getForecastForCity('Madrid')).not.toBeNull()
  })

  test('invalid city', async () => {
    expect(await getForecastForCity('VenadoTuerto')).toContain('city not found')
    expect(await getForecastForCity('Buenos Airesa')).toContain('city not found')
    expect(await getForecastForCity('Rosarioasd')).toContain('city not found')
  })
})
