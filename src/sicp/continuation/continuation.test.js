import {
  plus,
  id,
  multiple,
  sumWithK,
  reSumRecursive,
  factC,
} from './continuation'

describe('continuation test', () => {
  it('continuation plus test', () => {
    let result = plus(3, 4, (x) => x)
    expect(result).toEqual(7)

    result = plus(8, 4, id)
    expect(result).toEqual(12)
  })

  it('multiple test', () => {
    // 2 * 3 + 1
    const multipleAndPlus = multiple(2, 3, (result) => {
      return result + 1
    })
    expect(multipleAndPlus).toEqual(7)

    // 1*2 + 3* 4;

    const result = multiple(1, 2, (r1) => {
      return multiple(3, 4, (r2) => {
        return r1 + r2
      })
    })
    expect(result).toEqual(14)
  })

  it('sum numbers continuation test', () => {
    //1 + 2 + 3 + … + n = n(n + 1)/2
    const result = sumWithK(10, id)
    expect(result).toEqual(55)
  })

  it('sum numbers recursively continuation test', () => {
    const result = reSumRecursive(10, id)
    expect(result).toEqual(55)
  })

  it('factC test', () => {
    const result = factC(10, id)
    expect(result).toEqual(3628800)
  })
})
