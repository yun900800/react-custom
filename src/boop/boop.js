import React from 'react'
import { animated, useSpring } from 'react-spring'
import { useBoop } from '../hooks/use-boop'
import './boop.css'

export const Boop = ({ rotation = 0, timing = 150, children }) => {
  const [isBooped, setIsBooped] = React.useState(false)
  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  }
  React.useEffect(() => {
    if (!isBooped) {
      return
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])
  const trigger = () => {
    setIsBooped(true)
  }
  return (
    <span className="boop-padding" onMouseEnter={trigger} style={style}>
      {children}
    </span>
  )
}

export const SpringBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false)
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
             rotate(${rotation}deg)
             scale(${scale})`
      : `translate(0px, 0px)
             rotate(0deg)
             scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  })
  React.useEffect(() => {
    if (!isBooped) {
      return
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)
    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])
  const trigger = () => {
    setIsBooped(true)
  }
  return (
    <animated.span
      className="boop-padding"
      onMouseEnter={trigger}
      style={style}
    >
      {children}
    </animated.span>
  )
}

export const NewBoop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig)
  return (
    <animated.span
      className="boop-padding"
      onMouseEnter={trigger}
      style={style}
    >
      {children}
    </animated.span>
  )
}
