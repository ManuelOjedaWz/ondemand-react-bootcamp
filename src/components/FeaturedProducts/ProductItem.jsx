import React from 'react'
import PropTypes from 'prop-types'

export default function ProductItem ({ product }) {
  const {
    data: { mainimage, name, category, price }
  } = product

  return (
    <div className='product-item'>
      <img src={mainimage.url} />
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Category:</span> {category.slug.toString().toUpperCase()}
      </p>
      <p>
        <span>Price:</span> ${price} USD
      </p>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}
