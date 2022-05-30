import React from 'react'
import Menu from '../Menu'
import Logo from '../../assets/logo.png'
import './styles.css'

export default function Header () {
  return (
    <section>
      <header className='header'>
        <section className="header--logo">
          <img src={Logo} alt="Logo" />
        </section>
        <section className="header--title">
          <h1 className='header-title'>E-Commerce</h1>
        </section>
        <section className="header--shopping-search">
          <input type="text" className="header--search-bar" />
          <i className="fa-solid fa-cart-shopping"></i>
        </section>
      </header>
      <Menu />
    </section>
  )
}
