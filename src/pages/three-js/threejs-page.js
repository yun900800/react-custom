import React from 'react';
import styles from './threejs-page.module.css';
import { Scene } from '../../component/three/scene';
import GsapTo from '../../feature/gsapto/ui/gsapto';
import GsapFrom  from '../../feature/gsapfrom/ui/gsapfrom';
import GsapFromTo from '../../feature/gsapfromto/ui/gsapfromto';
import GsapDraggable from '../../feature/gsapdraggable/ui/gsapdraggable';
import FlyingBall from '../../feature/gsapflyball/ui/FlyingBall';
import GsapTimeline from '../../feature/gsaptimeline/ui/gsaptimeline';
const ThreeJsPage = () => {
  return (
    <div className={styles.threeJsPage}>
      <h1>Three.js Page</h1>
      <p>This page will contain Three.js examples and tutorials.</p>
      <Scene />
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapDraggable />
      <FlyingBall />
      <GsapTimeline />
    </div>
  );
}

export default ThreeJsPage;