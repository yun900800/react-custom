import React from 'react'
import Sparkles, { Sparkle, generateSparkle } from './sparkles'
import { screen, render } from '@testing-library/react'

describe('sparkles test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useFakeTimers()
  })

  it('Sparkles should be render getByText test', () => {
    const { getByText } = render(<Sparkles color="red">hello</Sparkles>)
    //screen.debug();
    expect(getByText('hello')).toBeInTheDocument()
  })

  it('Sparkles should be render queryByDisplayValue test', () => {
    const { queryByDisplayValue } = render(
      <Sparkles color="red">hello</Sparkles>
    )
    expect(queryByDisplayValue('hello')).toBeNull()
  })
  it('test generate Sparkles', () => {
    const result = generateSparkle({ color: 'red' })
    expect(result.color).toEqual({ color: 'red' })
  })

  it('test Sparkle render', () => {
    render(
      <Sparkle size={15} color="red" style={{ top: 15, left: 15 }}></Sparkle>
    )
    //screen.debug();
    expect(screen.getByTestId('sparkle').getAttribute('style')).toEqual(
      'top: 15px; left: 15px;'
    )
    expect(
      screen.getByTestId('sparkle').children[0].getAttribute('height')
    ).toEqual('15')
    expect(
      screen.getByTestId('sparkle').children[0].children[0].getAttribute('fill')
    ).toEqual('red')
  })
})
