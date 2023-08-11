import React from 'react'
import './hello.css'
import Sparkles from '../sparkle/sparkles'
import PROCESS from '../assets/images/process-picture.jpg'
import SPARKLES from '../assets/svg/sparkle.svg'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  const user = 'this is a userInfo'
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  console.log(user)
  return (
    <div className="hello">
      <Sparkles color="red">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </Sparkles>
      <img src={PROCESS} width={400} height={400} alt="a logo"></img>
      <img src={SPARKLES} width={40} height={40} alt="a logo"></img>
    </div>
  )
}

export default Hello

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}
