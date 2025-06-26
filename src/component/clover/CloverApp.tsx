import React from "react";
import Clover from "./Clover";
import CloverNew from "./Clover-new";
import Clover1 from "./clover-1";
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
        branchColor="var(--color-water)"
        branchHoverColor="var(--color-orange)"
        leafColors={[
          { color: 'var(--color-onion-cyan)', hoverColor: 'var(--color-jade-green)' },
          { color: 'var(--color-onion-green)', hoverColor: 'var(--color-bamboo-green)' },
          { color: 'var(--color-grass-green)', hoverColor: 'var(--color-cyan-green)' },
        ]}
      />
      <CloverNew
        type="four"
        leavesWidth={180}
        leavesHeight={180}
        leaveWidth={30}
        leaveHeight={50}
        leafColors={[
          { color: 'var(--color-orange)', hoverColor: 'var(--color-orange-ad)' },
          { color: 'var(--color-bright-red)', hoverColor: 'var(--color-magenta-red)' },
          { color: 'var(--color-blue-purple)', hoverColor: 'var(--color-purple-tang)'},
          { color: 'var(--color-water)', hoverColor: 'var(--color-lake-green)'},
        ]}
      />
      <Clover1 type="four" />
      <Clover1 type="three" />
    </div>
    
  );
}