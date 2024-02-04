import React from "react";
import { keyframes, styled } from "styled-components";
export const Foldable3 = ({width, height,src})=>{
    const [foldAngle, setFoldAngle] = React.useState(60);

    const sharedStyles = {
        width,
        height: height/2,
    }

    return (
        <div style={{perspective:1200}}>
            {/* 有了以上属性transform的时候才有3d效果,此属性用于transform元素的父元素上,试试去掉怎么样? */}
            <Wrapper
                style={{
                    // This property's new ⤸
                    transformStyle: 'preserve-3d',
                }}
            >
            {/* top half */}
            <div style={{
                ...sharedStyles,
                overflow:'hidden'
                }}>
                <img src={src}
                    alt="this is a ddd process picture"
                    style={{
                        width,
                        height
                    }}
                />
            </div>
            {/* bottom half */}
            <div
                style={{
                    ...sharedStyles,
                    backgroundPosition: '0px -100%',
                    transform: `rotateX(${foldAngle}deg)`,
                    transformOrigin: 'center top',
                    willChange: 'transform',
                    backgroundSize: `${width}px ${height}px`,
                    backgroundImage: `url(${src})`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Our backface */}
            <div
                style={{
                position: 'absolute',
                backfaceVisibility: 'hidden',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor:
                    'hsla(0, 100%, 100%, 0.9)',
                transform:
                    'rotateX(180deg) translateZ(2px)',
                }}
            />
            </div>
            
            </Wrapper>
        </div>
        )
}

const rotationKeyframes = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
//   animation:
//     ${rotationKeyframes}
//     4000ms
//     linear
//     infinite;
`

// 以上组件为第三个版本,解决图片遮罩的问题,同时也解决遮罩和背景图片在旋转过程中显示层次不对的问题