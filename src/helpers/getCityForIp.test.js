/* eslint-env jest */

const { getCityForIp } = require('./getCityForIp.js')

describe('getCityForIp', () => {
  test('ip invalida', async () => {
    expect(await getCityForIp()).toBeNull()
    expect(await getCityForIp(undefined)).toBeNull()
    expect(await getCityForIp(null)).toBeNull()
    expect(await getCityForIp('192.68.10')).toBeNull()
  })

  test('ip valida', async () => {
    const city = await getCityForIp('190.11.147.227')
    expect(city).toEqual('Venado Tuerto')
  })
})
