/* eslint-disable react/prop-types */
import React from 'react'

export default function SliderButton ({ onClickFunction, buttonClassName, iClassName }) {
  return (
    <button className={buttonClassName} onClick={onClickFunction}>
      <i className={iClassName}></i>
    </button>
  )
}
