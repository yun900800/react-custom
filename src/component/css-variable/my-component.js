// MyComponent.jsx
import React from 'react';
import styles from './my-component.module.css';

import sassStyles from './my-component.module.scss';

const MyComponent = () => {
  // Using CSS Modules for styling
  return <>
    <h1 className={styles.title}>
        Hello, CSS Modules! I want to use CSS variables in my component.
    </h1>
    <h2 className={`${styles.title1} ${styles.title2}`}>
        This is a title with multiple classNames.
        this component contains multiple classNames and css variables
    </h2>
    <div className={sassStyles.container}>
        <h1 className={sassStyles.title}>
            this is a title with sass variables
        </h1>
    </div>
    <div className={`bg-green-600 shadow-md ${sassStyles.customBox}`}>
        Tailwind + Module
    </div>
  </>;
}

export default MyComponent;
