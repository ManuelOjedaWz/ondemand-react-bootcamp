import React from 'react'
import MenuItem from './MenuItem'
import './styles.css'

export default function Menu () {
  return (
    <nav className='menu'>
      <ul className="menu--list">
        <MenuItem url='#' text='Home' />
        <MenuItem url='#' text='Categories' />
        <MenuItem url='#' text='Products' />
      </ul>
    </nav>
  )
}
