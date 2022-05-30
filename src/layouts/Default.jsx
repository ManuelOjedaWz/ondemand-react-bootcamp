/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../components/Header'

export default function Default ({ children }) {
  return (
    <main>
      <Header />
      { children }
    </main>
  )
}
