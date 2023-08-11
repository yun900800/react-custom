import styled from 'styled-components'
import generateSparkle from './generate-sparkle'
import React from 'react'
import useRandomInterval from '../hooks/useRandomInterval'
function Sparkles({ children }) {
  const [sparkles, setSparkles] = React.useState([])
  useRandomInterval(
    () => {
      const now = Date.now()
      // Create a new sparkle
      const sparkle = generateSparkle()
      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt
        return delta < 1000
      })
      // Include our new sparkle
      nextSparkles.push(sparkle)
      // Make it so!
      setSparkles(nextSparkles)
    },
    50,
    500
  )
  // const sparkle = generateSparkle();
  return (
    <Wrapper>
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`

export default Sparkles
