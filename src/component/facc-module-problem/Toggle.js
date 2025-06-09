// Toggle.js
import styles from './Toggle.module.css';
import React from 'react';
import PropTypes from 'prop-types';

// 这里存在一个问题，就是子组件负责行为，而不负责样式，因此传递样式出去是不合适的
const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(o => !o);

  return children({ on, toggle, styles }); // 把样式传出去？
};
Toggle.propTypes = {
  children: PropTypes.func.isRequired,
};

const ToggleNew = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(o => !o);

  if (typeof children === 'function') {
    return children({ on, toggle });
  }

  return (
    <button className={on ? `${styles.on} ${styles.btn}` : `${styles.off} ${styles.btn}`} onClick={toggle}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
};
export default Toggle;
export { Toggle, ToggleNew };