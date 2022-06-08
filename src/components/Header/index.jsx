import React from 'react'
import Logo from '../../assets/logo.png'
import './styles.scss'

// eslint-disable-next-line react/prop-types
export default function Header ({ onHandleLinkPage }) {
  return (
    <section>
      <header className='header'>
        <section className="header--logo">
          <img src={Logo} alt="Logo" onClick={() => onHandleLinkPage()} />
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
