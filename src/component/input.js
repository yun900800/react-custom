import React, { useState } from 'react';
import styles from './input.module.css';
import Sparkles from '../sparkle/sparkles';
console.log(styles);

const Input = ({ id = '', label = '', type = 'text' }) => {
  const [value, setValue] = useState('')
  return (
    <div className={styles.inputGroup}>
      <input
        className={styles.input}
        type={type}
        id={id}
        data-testid={id}
        label={label}
        onChange={({ target }) => {
          setValue(target.value)
        }}
        value={value}
      />
      <label htmlFor={id} className={styles.label}>
        <Sparkles color="var(--color-magenta)">{label}</Sparkles>
        {/* {label} */}
      </label>
    </div>
  )
}

const AnimatedInput = ({ id = '', label = '', type = 'text' }) => {
  const [value, setValue] = useState('')
  return (
    <div className={styles['input-group-animated']}>
      <input
        className={styles['input-animated']}
        type={type}
        id={id}
        data-testid={id}
        label={label}
        onChange={({ target }) => {
          setValue(target.value)
        }}
        value={value}
      />
      <label htmlFor={id} className={styles['label-animated']}>
        <Sparkles color="var(--color-orange-ad)">{label}</Sparkles>
        {/* {label} */}
      </label>
      <span class={styles.border}></span>
    </div>
  )
}

export default Input
export { AnimatedInput }
