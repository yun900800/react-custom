import React from "react";
import Clover from "./Clover";
import CloverNew from "./Clover-new";
import styles from "./clover.module.css"; 
export default function CloverApp() {
  return (
    <div className={styles.main}>
      <Clover type="four" />
      <Clover type="three" />
      <Clover type="three" />
      <Clover type="three" />
      <CloverNew type="three" 
        leavesWidth={180} 
        leavesHeight={180} 
        leaveWidth={60} 
        leaveHeight={90} 
        originX = "102%"
        originY= "102%"
        />

      <CloverNew type="four" 
        leavesWidth={180} 
        leavesHeight={180} 
        leaveWidth={30} 
        leaveHeight={50} 
      />

      <CloverNew
        type="three"
        leavesWidth={180}
        leavesHeight={180}
        leaveWidth={60}
        leaveHeight={90}
        originX="102%"
        originY="102%"
        leafColors={[
          { color: "#0f0", hoverColor: "#ff0" },
          { color: "#0ff", hoverColor: "#f0f" },
          { color: "#f00", hoverColor: "#00f" },
        ]}
      />
      <CloverNew
        type="four"
        leavesWidth={180}
        leavesHeight={180}
        leaveWidth={30}
        leaveHeight={50}
        leafColors={[
          { color: "#0f0", hoverColor: "#ff0" },
          { color: "#0ff", hoverColor: "#f0f" },
          { color: "#f00", hoverColor: "#00f" },
          { color: "#fa0", hoverColor: "#0af" },
        ]}
      />
    </div>
    
  );
}