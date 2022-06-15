import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.scss'

export default function Header () {
  const [search, setSearch] = useState<string>('')
  const ENTER: string = 'Enter'
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = (e.target as HTMLInputElement)
    setSearch(value)
  }

  const handleKeyboardSearch = (e: React.KeyboardEvent) => {
    if (e.key === ENTER) {
      navigate(`/search?q=${search}`)
      navigate(0)
    }
  }

  const handleSearch = (e: React.MouseEvent) => {
    navigate(`/search?q=${search}`)
    navigate(0)
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
          <input
            type="text"
            className="header--search-bar"
            onKeyUp={handleKeyboardSearch}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
          <i className="fa-solid fa-cart-shopping"></i>
        </section>
      </header>
    </section>
  )
}
