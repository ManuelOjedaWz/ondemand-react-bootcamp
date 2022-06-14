import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../assets/logo.png'
import './styles.scss'

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

Header.propTypes = {
  onHandleLinkPage: PropTypes.func
}
