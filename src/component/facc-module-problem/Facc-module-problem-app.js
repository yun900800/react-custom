import React from "react";
import Toggle from "./Toggle";
import styles from "./Toggle.module.css";
import { ToggleNew } from "./Toggle"; // 引入ToggleNew
const FaccModuleProblemApp = () => {
  return (
    <div className={styles.container}>
      <Toggle>
        {({ on, toggle, styles }) => (
          <button
            className={`${styles.toggleBtn} ${styles.btn}`}
            onClick={toggle}
          >
            {on ? "ON" : "OFF"}
          </button>
        )}
      </Toggle>
      <Toggle>
        {({ on, toggle }) => (
            <button
            className={`${on ? styles.active : styles.inactive} ${styles.btn}`}
            onClick={toggle}
            >
            {on ? 'ON' : 'OFF'}
            </button>
        )}
      </Toggle>
      <ToggleNew>
        {({ on, toggle }) => (
          <button
            className={`${on ? styles.active : styles.inactive} ${styles.btn}`}
            onClick={toggle}
          >
            {on ? "ON" : "OFF"}
          </button>
        )}
      </ToggleNew>
      <ToggleNew/>
    </div>
  );
};
export default FaccModuleProblemApp;