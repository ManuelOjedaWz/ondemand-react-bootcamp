import React from 'react'
import PropTypes from 'prop-types'
import ProductsSidebar from '../components/ProductsSidebar'
import '../styles/Products.scss'

export default function ProductsLayout ({ productCategories, children }) {
  return (
    <section className='products-layout'>
      <ProductsSidebar categories={productCategories?.results} />
      <div className="products-layout--products">
        { children }
      </div>
    </section>
  )
}

ProductsLayout.propTypes = {
  productCategories: PropTypes.object,
  children: PropTypes.object
}
