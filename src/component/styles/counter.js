import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:840px;
    width:100%;
    background:#efefef;
    border-radius:4px;
    flex-direction:column;
    border:1px solid #eee;
    padding-top: 16px;
`;

const Paragraph = styled.p`
    line-height:3rem;
    padding: 16px 48px;
    background:#fff;
    margin-bottom: 40px;
    border-radius:8px;
`;

const Button = styled.button`
    width:60px;
    height:60px;
    background: yellow;
    border-radius:8px;
    padding: 20px 40px;
    margin-bottom: 40px;
`
export default class Counter extends React.Component {
    state = { count: 0 };
  
  
    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });
  
  
    render() {
      return (
        <StyledCounter>
          <Paragraph>{this.state.count}</Paragraph>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </StyledCounter>
      );
    }
  }