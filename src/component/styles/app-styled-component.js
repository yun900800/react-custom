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
 import Counter from './counter';
function AppStyledComponent() {
    return <div class="app-container">
                <div className='app'>
                    <StyleBasic/>
                    <StyleExtender/>
                    <AdapterProps/>
                    <StyleAsExtender/>
                    <StyleAsCustomExtender/>
                    <StyledAnyComponent/>    
                </div>
                <div className='app'>
                    <Counter/>
                </div>
            </div>
}

export default AppStyledComponent;