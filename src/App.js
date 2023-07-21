import React, { Component } from 'react'
import Sparkles from './sparkle/sparkles'
import Input from './component/new-input'
import Hello from './component/Hello.tsx'
import { Boop, SpringBoop, NewBoop } from './boop/boop'
import CircleDemo from './component/circle-demo'
import { StyleBasic } from './component/styles/style-basic'
import { AdapterProps } from './component/styles/adapter-prop'
import { StyleExtender } from './component/styles/style-extender'
import './app.css'

export default class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          {process.env.NODE_ENV}, {process.env.name}
        </div>
        <div className="app">
          <Sparkles color="red" width="200px" height="200px">
            hello
          </Sparkles>
          , react
          <br />
          <Sparkles color="green" width="200px" height="200px">
            nice to meet you
          </Sparkles>
        </div>
        <div className="app">
          <Input label="username">aaa</Input>
        </div>
        <div className="app">
          <Hello name="yun900800@126.com" enthusiasmLevel={5}></Hello>
        </div>
        <Boop rotation={20} timing={200}>
          <div>Common Boop</div>
        </Boop>
        <SpringBoop rotation={20} x={20} timing={200}>
          <div>Spring Boop </div>
        </SpringBoop>

        <NewBoop rotation={20} y={20} timing={200}>
          <div>NewBoop with Spring and Hooks</div>
        </NewBoop>
        <CircleDemo></CircleDemo>
        <StyleBasic></StyleBasic>
        <AdapterProps></AdapterProps>
        <StyleExtender></StyleExtender>
      </>
    )
  }
}
