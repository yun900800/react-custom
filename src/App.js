import React, { Component } from 'react'
import Sparkles from './sparkle/sparkles'
import Input from './component/new-input'
import Hello from './component/Hello.tsx'
import { Boop, SpringBoop, NewBoop } from './boop/boop'
import CircleDemo from './component/circle-demo'
import { StyleBasic } from './component/styles/style-basic'
import { AdapterProps } from './component/styles/adapter-prop'
import { StyleExtender } from './component/styles/style-extender'
import TaskList from './stories/TaskList'

import FoldableImage from './fold/foldable'
import { Foldable } from './fold/foldable-1'
import { Foldable2 } from './fold/foldable-2'
import { Foldable3 } from './fold/foldable-3'

import Articles from './component/article/articles.jsx'
import ArticlesWithHook from './component/article/articles-with-hook.js'
import ArticlesWithDataApi from './component/article/article-with-data-api.js'
export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className="app">
          {process.env.NODE_ENV}, {process.env.name}
        </div>
        <div className="app">
          <Sparkles color="purple" width="200px" height="200px">
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
        <div className="app">
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
        </div>
        
        <div className="app">
        <StyleBasic></StyleBasic>
        <AdapterProps></AdapterProps>
        <StyleExtender></StyleExtender>
        </div>
        <div className="app">
          <TaskList/>
        </div>
        <div className="app">
        <FoldableImage
          width={600}
          height={400}
          percentage={40}
          src="assets/images/process-picture.jpg"
        ></FoldableImage>
        <Foldable
          width={600}
          height={400}
          src="assets/images/process-picture.jpg"
        ></Foldable>
        <Foldable2
          width={600}
          height={400}
          src="assets/images/process-picture.jpg"
        ></Foldable2>
        <Foldable3
          width={600}
          height={400}
          src="assets/images/process-picture.jpg"
        ></Foldable3>
        </div>
        <div className='app'>
          <Articles />
          <ArticlesWithHook />
          <ArticlesWithDataApi />
        </div>
        
      </div>
    )
  }
}
