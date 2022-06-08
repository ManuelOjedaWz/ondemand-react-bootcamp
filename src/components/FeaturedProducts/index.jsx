import React from 'react'
import Products from '../../mocks/en-us/featured-products.json'
import ProductItem from './ProductItem'
import './styles.scss'

// eslint-disable-next-line react/prop-types
export default function FeaturedProducts ({ onHandleLinkPage }) {
  function getRandomProduct () {
    return Products.results.sort(() => Math.random() - Math.random()).slice(0, 5)
  }

  return (
    <section className='featured-products'>
      <h3 className='title'>Featured Products</h3>

      <div className="featured-products--grid">
        { getRandomProduct().map((product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        }) }
      </div>

      <div className="featured-products--button">
        <button onClick={() => onHandleLinkPage('products')}>
          View all products
        </button>
      </div>
    </section>
  )
}
