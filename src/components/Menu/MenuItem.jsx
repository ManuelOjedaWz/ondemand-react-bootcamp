/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem ({ url, text }) {
  return (
    <li className="menu--list-item">
      <Link to={url}>{text}</Link>
    </li>
  )
}
