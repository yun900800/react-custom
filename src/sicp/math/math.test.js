import {
  abs,
  greaterOrEqual,
  plus,
  minus,
  a_plus_abs_b,
  sqrtIter,
  sqrt,
  cubeRoot,
  countChange,
  count_charge_new,

  fRecursive,
  fIterate
} from './math'

describe('math test', () => {
  it('a_plus_abs_b test', () => {
    expect(a_plus_abs_b(5, -4)).toEqual(9)
    expect(plus(5, -4)).toEqual(1)
    expect(minus(5, -4)).toEqual(9)
    expect(greaterOrEqual(5, -4)).toBeTruthy()
    expect(abs(-4)).toEqual(4)
  })

  const p = () => p()
  const test = (x, y) => (x === 0 ? 0 : y)
  it('js applicative order or nornal order', () => {
    // applicative order
    expect(() => {
      test(0, p())
    }).toThrowError('Maximum call stack size exceeded')
  })

  it('sqrtIter test', () => {
    expect(sqrtIter(1, 2)).toBeGreaterThan(1.414)
    expect(sqrtIter(1, 9)).toBeGreaterThan(3)
    // 这里的值总是要比精确值大一点点
    expect(sqrt(16)).toBeGreaterThan(4)

    expect(sqrt(0.0001)).toBeGreaterThan(0.01)

    expect(sqrt(1000000)).toBeGreaterThan(1000)
  })
  it('cubeRoot test', () => {
    expect(cubeRoot(27)).toBeGreaterThan(3)
    expect(cubeRoot(4.5)).toBeGreaterThan(1.658)
  })
  it('countChange test', () => {
    expect(countChange(100)).toEqual(292)
  })
  it('count_charge_new test', () => {
    //expect(count_charge_new(100, 5, (x) => x)).toEqual(292)
  });

  it('fRecursive test',()=>{
    expect(fRecursive(4)).toEqual(11)
    expect(fIterate(4)).toEqual(11);
  })
})
