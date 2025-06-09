// Toggle.js 注意，
// 1. 这里如果label的onClick事件不阻止冒泡，点击label会触发input的onChange事件，
// 导致菜单无法关闭
// 2. hamberger的样式是通过CSS变量来设置背景色的，
// 这样可以在使用Toggle组件时传入不同的背景色

// 3. 这的hidden似乎是从tailwindcss中来的，不是很很合适

// 4. 注意，Toggle组件是一个受控组件，
// 需要传入checked属性来控制开关状态，否则会导致在FACC中UI样式不能切换
import React from 'react';
import PropTypes from "prop-types"
import styles from './toggle.module.css';
const Toggle = ({ toggle, bgColor, checked }) => (
  <div className={styles.toggle} id="toggle" onClick={toggle}>
    <input
      className={styles["menu-trigger"]}
      id="togglenav"
      type="checkbox"
      checked={checked}
      // onChange={toggle}
      readOnly={false} // 不要加 readOnly，受控组件只需要 checked+onChange
    />
    <label
      className={styles["burger-wrapper"]}
      htmlFor="togglenav"
      // 不要加 onClick={e => e.stopPropagation()}
    >
      <div
        className={styles.hamburger}
        style={{ '--bg-color': bgColor }}
      ></div>
    </label>
  </div>
);

Toggle.propTypes = {
    toggle: PropTypes.func.isRequired
}

Toggle.defaultProps = {
    toggle: () => {}
};

export default Toggle;