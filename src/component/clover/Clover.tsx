import React from "react";
import styles from "./clover.module.css"; // 用 CSS Modules  

type CloverProps = {
  type?: "four" | "three";
};

function Clover({ type = "four" }: CloverProps) {
  const leafClass = type === "four" ? styles.leave : styles["leave-three"];
  const angles =
    type === "four"
      ? [styles.angleN, styles.angleW, styles.angleS, styles.angleE]
      : [styles.angle1, styles.angle2, styles.angle3];

  return (
    <div className={styles.clover}>
      <div className={styles.leaves}>
        {angles.map((angle, i) => (
          <i key={angle + i} className={`${leafClass} ${angle}`}></i>
        ))}
      </div>
      <i className={styles.branch}></i>
    </div>
  );
}

export default Clover;