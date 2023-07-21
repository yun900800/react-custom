import random from './random'

describe('random test', () => {
  it('random result test', () => {
    const result = random(10, 20)
    expect(result).toBeGreaterThanOrEqual(10)
    expect(result).toBeLessThan(20)
  })

  it('random result should equal range below  test', () => {
    for (let i = 0; i < 1000; i++) {
      const result = random(10, 20)
      expect(result).toBeGreaterThanOrEqual(10)
    }
  })

  it('random result should not equal range top test', () => {
    for (let i = 0; i < 1000; i++) {
      const result = random(10, 20)
      expect(result).not.toEqual(20)
    }
  })
})
