import styled from 'styled-components'
import React from 'react';
import {COLORS} from '../../constant/constants'
export const StyleExtender = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  )
}


export const StyleAsExtender = ()=>{
  return (
    <>
      <Button>Normal Button</Button>
      <Button as="a" href="#">Link with Button styles</Button>
      <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
    </>
  )
}

export const StyleAsCustomExtender = ()=>{
  return (
    <>
      <Button>Normal Button</Button>
      <Button as={ReversedButton} >custom Button with Normal Button styles</Button>
    </>
  )
}

const Button = styled.button`
  color: ${COLORS.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color-camel);
  border-radius: 3px;
`

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: var(--color-dusky-yellow);
  border-color: tomato;
`

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

