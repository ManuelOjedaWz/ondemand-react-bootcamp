import React from 'react'

export default function SliderButton ({ onClickFunction, buttonClassName, iClassName }: { onClickFunction: any, buttonClassName: string, iClassName: string }) {
  return (
    <button className={buttonClassName} onClick={onClickFunction}>
      <i className={iClassName}></i>
    </button>
  )
}
