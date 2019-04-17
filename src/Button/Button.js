import React from 'react'

export const Button = ({ text, onClick, type, disabled, className }) => (
  <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
  >
    {text}
  </button>
)
