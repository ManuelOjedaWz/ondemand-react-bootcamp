import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.scss'

export default function Header () {
  const ENTER: string = 'Enter'
  const navigate = useNavigate()
  const handleSearch = (e: React.KeyboardEvent) => {
    const { value } = (e.target as HTMLInputElement)
    if (e.key === ENTER) {
      navigate(`/search?q=${value}`)
    }
  }

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
          <input type="text" className="header--search-bar" onKeyUp={handleSearch} />
          <i className="fa-solid fa-cart-shopping"></i>
        </section>
      </header>
    </section>
  )
}
