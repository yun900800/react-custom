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
import { GenericButton , GenericCard, GenericJoinButton, GenericJoinButtonWithType}  from './generic-styled-button';
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
                <GenericButton $primary={false}>访问 Youtube</GenericButton> 
                <GlobalEvent/>
                <GenericButton $primary>访问 TG</GenericButton> 
                <GenericCard $highlight $width="500px" >
                    这是一个包含多个props的泛型card片段
                </GenericCard>
                <GenericCard $highlight={false} >
                    这是一个包含多个props的泛型card片段；样式不一样而已
                </GenericCard>
                <GenericJoinButton $color="primary">访问 正常TG</GenericJoinButton>
                <GenericJoinButton $color="danger">访问 危险TG</GenericJoinButton>
                <GenericJoinButton $color="">访问无参数TG</GenericJoinButton>
                <GenericJoinButtonWithType $color="primary">访问 正常TG</GenericJoinButtonWithType>
                <GenericJoinButtonWithType $color="danger">访问 危险TG</GenericJoinButtonWithType>
                <GenericJoinButtonWithType $color="warning">访问无参数TG</GenericJoinButtonWithType>
                <GlobalEvent/>
                <WelcomeAnimationExample/>
            </div>
}

export default AppStyledComponent;