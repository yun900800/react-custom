import React from 'react';
import styles from './threejs-page.module.css';
import { Scene } from '../../component/three/scene';
const ThreeJsPage = () => {
  return (
    <div className={styles.threeJsPage}>
      <h1>Three.js Page</h1>
      <p>This page will contain Three.js examples and tutorials.</p>
      <Scene />
    </div>
  );
}

export default ThreeJsPage;