import React from 'react';
import { 
    StyleBasic
 } from './style-basic';
 import {
    StyleExtender,
    StyleAsExtender,
    StyleAsCustomExtender
 } from './style-extender';
 import {
    AdapterProps
 } from './adapter-prop';
 import {
    StyledAnyComponent
 } from './style-link';
 import Counter, { Counter2, MaterialList, Timer } from './counter';

 import { StyledButton, StyledLink} from './styled-button';
import GlobalEvent from '../hooks/component/global-event';
import { WelcomeAnimationExample } from '../hooks/component/welcome-animation';
import DarkMode from '../dark/dark-mode';
import ThemeSwitcher from '../dark/theme-switcher';
function AppStyledComponent() {
    return <div className="app-container">
                <div className='flex-grow'>
                    <StyleBasic/>
                    <StyleExtender/>
                    <AdapterProps/>
                    <StyleAsExtender/>
                    <StyleAsCustomExtender/>
                    <StyledAnyComponent/>    
                </div>
                <div className='flex-grow'>
                    <Counter/>
                    <Counter2/>
                    <MaterialList/>
                    <Timer />
                    <DarkMode/>
                    <ThemeSwitcher/>
                </div>
                <StyledButton bg="green" onClick={() => alert("Clicked!")}>
                    绿色按钮
                </StyledButton>
                <StyledButton disabled>禁用按钮</StyledButton>
                <br />
                <StyledLink href="https://google.com" newTab>
                    访问 Google
                </StyledLink>
                <GlobalEvent/>
                <WelcomeAnimationExample/>
            </div>
}

export default AppStyledComponent;