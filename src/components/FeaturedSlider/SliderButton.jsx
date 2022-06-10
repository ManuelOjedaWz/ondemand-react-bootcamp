import React from 'react'
import PropTypes from 'prop-types'

export default function SliderButton ({ onClickFunction, buttonClassName, iClassName }) {
  return (
    <button className={buttonClassName} onClick={onClickFunction}>
      <i className={iClassName}></i>
    </button>
  )
}

SliderButton.propTypes = {
  onClickFunction: PropTypes.func,
  buttonClassName: PropTypes.string,
  iClassName: PropTypes.string
}
