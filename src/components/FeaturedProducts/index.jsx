import React from 'react'
import Products from '../../mocks/en-us/featured-products.json'
import ProductItem from './ProductItem'
import './styles.scss'

export default function FeaturedProducts () {
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
    </section>
  )
}
