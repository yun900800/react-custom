import styled from 'styled-components'
import React from 'react'
export const StyleBasic = () => {
  return (
    <Wrapper>
      <Title>two color match and mixed</Title>
    </Wrapper>
  )
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--color-purple);
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: var(--color-white-gao);
`
