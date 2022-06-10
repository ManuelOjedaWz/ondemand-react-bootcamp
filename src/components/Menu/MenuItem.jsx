import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function MenuItem ({ url, text }) {
  return (
    <li className="menu--list-item">
      <Link to={url}>{text}</Link>
    </li>
  )
}

MenuItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}
