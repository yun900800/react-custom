import React from "react";
import styled from "styled-components";

export const GenericButton = styled.button<{$primary?: boolean}>`
  background-color: ${(props) => (props.$primary ? "#007bff" : "#fff")};
  color: ${(props) => (props.$primary ? "#fff" : "#007bff")};
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$primary ? "#007bff" : "#007bff")};
  `;

export const GenericCard = styled.div<{
    $highlight?: boolean;
    $width?: string;
  }>`
    background-color: ${props => props.$highlight ? 'yellow' : 'white'};
    width: ${props => props.$width || '300px'};
    padding: 16px;
    border-radius: 8px;
    color: ${props => props.$highlight ? 'black' : 'red'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

type ButtonColor = 'primary' | 'secondary' | 'danger';
export const GenericJoinButton = styled.button<{ $color?: ButtonColor }>`
    background-color: ${props => {
        switch (props.$color) {
            case 'primary':
            return 'blue';
            case 'secondary':
            return 'gray';
            case 'danger':
            return 'red';
            default:
            return 'lightgray';
        }
    }};
    color: white;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
`;

const colorMap = {
    primary: 'blue',
    secondary: 'gray',
    danger: 'red',
} as const;
type ColorKey = keyof typeof colorMap;

export const GenericJoinButtonWithType = styled.button<{ $color?: ColorKey  }>`
    background-color: ${props => colorMap[props.$color || 'secondary']};
    color: ${props => props.$color ? 'black' : 'red'};
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
`;

  