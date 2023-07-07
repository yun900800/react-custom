import React, { Component } from 'react';
import Sparkles from './sparkle/sparkles';
import './app.css';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Sparkles color='red' width="200px" height="200px">hello</Sparkles>
                , react  
                <br/>
                <Sparkles color='green' width="200px" height="200px">nice to meet you</Sparkles>
            </div>
        );
    }
}