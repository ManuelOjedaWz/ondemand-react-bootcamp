import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Default ({ onHandleLinkPage, children }) {
  return (
    <main>
      <Header onHandleLinkPage={onHandleLinkPage} />
      { children }
      <Footer />
    </main>
  )
}

Default.propTypes = {
  onHandleLinkPage: PropTypes.func,
  children: PropTypes.array
}
