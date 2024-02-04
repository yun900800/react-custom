import React from "react";
export const Foldable2 = ({width, height,src})=>{
    const [foldAngle, setFoldAngle] = React.useState(120);

    const sharedStyles = {
        width,
        height: height/2,
        
    }

    return (
        <div style={{perspective:1200}}>
            {/* 有了以上属性transform的时候才有3d效果,此属性用于transform元素的父元素上,试试去掉怎么样? */}
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
                    backgroundImage: `url(${src})`
                }}
            ></div>
        </div>
        )
}

// 以上组件为第二个版本,解决图像不可访问的问题