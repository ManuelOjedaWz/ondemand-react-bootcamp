/* eslint-disable react/prop-types */
import React from 'react'

export default function MenuItem ({ url, text }) {
  return (
    <li className="menu--list-item">
      <a href={url}>{text}</a>
    </li>
  )
}
