import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default function ProductsPagination ({ products }) {
  return (
    <div
      className='products-pagination'
    >
      <button>Prev</button>
      <button>{ products.page }</button>
      <button>Next</button>
    </div>
  )
}

ProductsPagination.propTypes = {
  products: PropTypes.object
}
