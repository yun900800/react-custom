import React from "react";
import styles from "./clover-new.module.css"; 
type CloverProps = {
  type?: "four" | "three";
  leavesWidth?: number;
  leavesHeight?: number;
  leaveWidth?: number;
  leaveHeight?: number;
};

function Clover1({
  type = "four",
  leavesWidth = 136,
  leavesHeight = 136,
  leaveWidth = 40,
  leaveHeight = 64,
}: CloverProps) {
  const leafClass = type === "four" ? styles.leave : `${styles["leave-three"]} ${styles.leave}`;
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
  } as React.CSSProperties;

  return (
    <div className={styles.clover} style={styleVars}>
      <div className={styles.leaves}>
        {angles.map((angle, i) => {
          return (
            <i
              key={angle + i}
              className={`${leafClass} ${angle}`}
            ></i>
          );
        })}
      </div>
      <i className={styles.branch}></i>
    </div>
  );
}


export default Clover1;