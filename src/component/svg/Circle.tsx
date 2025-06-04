import React from "react"
import PropTypes from "prop-types"

const Circle = ({ x, y, radius, fill }) => (
    <svg width="400" height="200" viewBox="0 0 400 200">
        <circle cx={x} cy={y} r={radius} fill={fill} />
    </svg>
)
Circle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
    fill: PropTypes.string,
}
Circle.defaultProps = {
    fill: 'red',
}

const RedCircle = ({ x, y, radius }) => (
    <Circle x={x} y={y} radius={radius} fill="red" />
)

RedCircle.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
}

export default Circle;
export { RedCircle };