import React from 'react'
import styled from 'styled-components'
const Link = ({className, children}) =>(
    <a className={className}>
        {children}
    </a>
)

const StyledLink = styled(Link)`
  color: #BF4F74;
  font-weight: bold;
`

export const StyledAnyComponent = ()=>(
    <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
)