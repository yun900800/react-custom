import styled from 'styled-components'
import React from 'react'
export const AdapterProps = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
    </div>
  )
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? 'var(--color-dark-brown)' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : 'var(--color-dark-brown)')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color-orange-between-yellow-and-red);
  border-radius: 3px;
`
