import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Products ({ onHandleLinkPage }) {
  return (
    <section className='products'>
      <h1>This is Product List Page</h1>
      <button onClick={() => onHandleLinkPage('home')}>Return to home</button>
    </section>
  )
}
