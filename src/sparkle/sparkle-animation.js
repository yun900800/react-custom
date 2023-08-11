import styled from 'styled-components'
const sparkleAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
`
const Svg = styled.svg`
  position: absolute;
  animation: ${sparkleAnimation} 600ms forwards;
`
console.log(Svg)
