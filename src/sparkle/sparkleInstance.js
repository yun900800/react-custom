import styled, { keyframes } from 'styled-components'
import React from 'react'
function SparkleInstance({ color, size, style }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      style={style}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </Svg>
  )
}

// const sparkleAnimation = keyframes`
//   0% {
//     transform: scale(0) rotate(0deg);
//   }
//   50% {
//     transform: scale(1) rotate(90deg);
//   }
//   100% {
//     transform: scale(0) rotate(180deg);
//   }
// `;

const growAndShrink = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.div`
  position: absolute;
  pointer-events: none;
  animation: ${growAndShrink} 600ms ease-in-out forwards;
`

const Svg = styled.svg`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  animation: ${spin} 600ms forwards;
`

console.log(Wrapper)

export default SparkleInstance
