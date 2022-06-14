import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.scss'

export default function Header () {
  return (
    <section>
      <header className='header'>
        <section className="header--logo">
          <Link to='/home'>
            <img src={Logo} alt="Logo" />
          </Link>
        </section>
        <section className="header--title">
          <h1 className='header-title'>
            E-Commerce
          </h1>
        </section>
        <section className="header--shopping-search">
          <input type="text" className="header--search-bar" />
          <i className="fa-solid fa-cart-shopping"></i>
        </section>
      </header>
    </section>
  )
}
