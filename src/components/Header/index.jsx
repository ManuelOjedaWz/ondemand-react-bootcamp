import React from 'react'
import Menu from '../Menu'
import Logo from '../../assets/logo.png'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <section>
      <header className='header'>
        <section className="header--logo">
          <Link to='/'>
            <img src={Logo} alt="Logo" />
          </Link>
        </section>
        <section className="header--title">
          <h1 className='header-title'>
            <Link to='/'>
              E-Commerce
            </Link>
          </h1>
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
