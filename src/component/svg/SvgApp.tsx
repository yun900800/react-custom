import React from "react";
import Circle, { RedCircle} from "./Circle";
const SvgApp = () => {
    return (
        <div style={{ width: "100%", display: "flex" }}>
          <Circle x={20} y={20} radius={20} fill="blue" />
          <RedCircle x={100} y={100} radius={50} />
          <RedCircle x={100} y={100} radius={50} />
        </div>
    );
}

export default SvgApp;