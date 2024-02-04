import React from "react";
export const Foldable = ({width, height,src})=>{
    const [foldAngle, setFoldAngle] = React.useState(60);

    const sharedStyles = {
        width,
        height: height/2,
        backgroundSize: `${width}px ${height}px`,
        backgroundImage: `url(${src})`
    }

    return (
        <div style={{perspective:1200}}>
            {/* 有了以上属性transform的时候才有3d效果,此属性用于transform元素的父元素上,试试去掉怎么样? */}
            {/* top half */}
            <div style={sharedStyles}/>
            {/* bottom half */}
            <div
                style={{
                    ...sharedStyles,
                    backgroundPosition: '0px -100%',
                    transform: `rotateX(${foldAngle}deg)`,
                    transformOrigin: 'center top',
                    willChange: 'transform'
                }}
            ></div>
        </div>
        )
}

// 以上组件为第一个版本,存在的问题是图像不可访问