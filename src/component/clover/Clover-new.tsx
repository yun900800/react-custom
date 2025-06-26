import React from "react";
import styles from "./clover.module.css"; 
type Percent = `${number}%`;
type LeafColor = {
  color: string;
  hoverColor: string;
};
type CloverProps = {
  type?: "four" | "three";
  leavesWidth?: number;
  leavesHeight?: number;
  leaveWidth?: number;
  leaveHeight?: number;
  branchWidth?: number;
  branchHeight?: number;

  originX?: Percent;
  originY?: Percent;
  leafColors?: LeafColor[];
  branchColor?: string;
  branchHoverColor?: string;
  // ...其它你想自定义的变量
};
function CloverNew({
  type = "four",
  leavesWidth = 136,
  leavesHeight = 136,
  leaveWidth = 40,
  leaveHeight = 64,
  branchWidth = 160,
  branchHeight = 160,
  originX = "93%",
  originY = "106%",
  leafColors = [],
  branchColor = "#219b21",
  branchHoverColor = "red",
}: CloverProps) {
  const leafClass = type === "four" ? styles.leave : styles["leave-three"];
  const angles =
    type === "four"
      ? [styles.angleN, styles.angleW, styles.angleS, styles.angleE]
      : [styles.angle1, styles.angle2, styles.angle3];

  // 通过 style 传递 CSS 变量
  const styleVars = {
    "--leaves-width": `${leavesWidth}px`,
    "--leaves-height": `${leavesHeight}px`,
    "--leave-width": `${leaveWidth}px`,
    "--leave-height": `${leaveHeight}px`,
    "--branch-width": `${branchWidth}px`,
    "--branch-height": `${branchHeight}px`,
    '--leave-three-origin-x': `${originX}`,
    '--leave-three-origin-y': `${originY}`,
    "--branch-color": branchColor,
    "--branch-hover-color": branchHoverColor,
    // ...其它变量
  } as React.CSSProperties;

  return (
    <div className={styles.clover} style={styleVars}>
      <div className={styles.leaves}>
        {angles.map((angle, i) => {
          const color = leafColors[i]?.color || "#0f0";
          const hoverColor = leafColors[i]?.hoverColor || "#219b21";
          return (
            <i
              key={angle + i}
              className={`${leafClass} ${angle}`}
              style={
                {
                  "--leaf-color": color,
                  "--leaf-hover-color": hoverColor,
                } as React.CSSProperties
              }
            ></i>
          );
        })}
      </div>
      <i className={styles.branch}></i>
    </div>
  );
}


export default CloverNew;