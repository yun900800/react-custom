import React, { useState } from 'react'
import './input.css'
import Sparkles from '../sparkle/sparkles'

const Input = ({ id = '', label = '', type = 'text' }) => {
  const [value, handleChange] = useState('')
  return (
    <div className="wrapper">
      <label htmlFor={id}>
        <Sparkles color="green">{label}</Sparkles>
      </label>
      <input
        type={type}
        id={id}
        data-testid={id}
        label={label}
        onChange={({ target }) => {
          handleChange(target.value)
        }}
        value={value}
      />
    </div>
  )
}
export default Input
