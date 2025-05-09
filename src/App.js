import React, { Component } from 'react'
import Sparkles from './sparkle/sparkles'
import Input from './component/new-input'
import CustomInput,{AnimatedInput} from './component/input'
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
import './app.css'
export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className="app system-info">
          {process.env.NODE_ENV}, {process.env.name}
        </div>
        <div className="app sparkle-info">
          <Sparkles color="var(--color-magenta)" width="200px" height="200px">
            <span className='sparkle-info-common'>hello</span>
          </Sparkles>
          , <span className='sparkle-info-one'>react</span>
          <br />
          <Sparkles color="green" width="200px" height="200px">
            <span className='sparkle-info-two'>nice to meet you</span>
          </Sparkles>
        </div>
        <div className="app app-input">
          <Input label="username">aaa</Input>
          <CustomInput label="自定义邮箱:" id="custom-email"></CustomInput>
          <CustomInput label="自定义账号:" id="custom-account"></CustomInput>
          <CustomInput label="自定义密码:" id="custom-password"></CustomInput>
          <AnimatedInput label="自定义密码:" id="custom-password-animated" type='password'></AnimatedInput>
        </div>
        <div className="app app-hello">
          <Hello name="yun900800@126.com" enthusiasmLevel={5}></Hello>
        </div>
        <div className="app app-boop">
          <Boop rotation={20} timing={200}>
            <div className='app-boop-common-color'>Common Boop</div>
          </Boop>
          <SpringBoop  rotation={20} x={20} timing={200}>
            <div className='app-boop-spring-color'>Spring Boop </div>
          </SpringBoop>

          <NewBoop rotation={20} y={20} timing={200}>
            <div className='app-boop-new-color'>NewBoop with Spring and Hooks</div>
          </NewBoop>
          <CircleDemo></CircleDemo>
        </div>
        
        <div className="app app-style">
          <StyleBasic></StyleBasic>
          <AdapterProps></AdapterProps>
          <StyleExtender></StyleExtender>
        </div>
        <div className="app app-tasklist">
          <TaskList/>
        </div>
        <div className="app app-foldable">
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
        <div className='app app-article'>
          <Articles />
          <ArticlesWithHook />
          <ArticlesWithDataApi />
        </div>
        
      </div>
    )
  }
}
