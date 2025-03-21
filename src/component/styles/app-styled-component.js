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
 import Counter, { Counter2, MaterialList } from './counter';

 import { StyledButton, StyledLink} from './styled-button';
import { Material } from 'three';
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
                </div>
                <StyledButton bg="green" onClick={() => alert("Clicked!")}>
                    绿色按钮
                </StyledButton>
                <StyledButton disabled>禁用按钮</StyledButton>
                <br />
                <StyledLink href="https://google.com" newTab>
                    访问 Google
                </StyledLink>
            </div>
}

export default AppStyledComponent;