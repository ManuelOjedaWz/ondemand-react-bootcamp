import React from 'react'

interface SliderButtonProps {
  onClickFunction: React.MouseEventHandler,
  buttonClassName: string,
  iClassName: string
}

export default function SliderButton ({ onClickFunction, buttonClassName, iClassName }: SliderButtonProps) {
  return (
    <button className={buttonClassName} onClick={onClickFunction}>
      <i className={iClassName}></i>
    </button>
  )
}
