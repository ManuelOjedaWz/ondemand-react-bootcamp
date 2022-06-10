import React from 'react'
import PropTypes from 'prop-types'

export default function ProductItem ({ product }) {
  return (
    <div>
      <img src={product.data?.mainimage.url} />
      <p>
        <b>Name:</b> {product.data?.name}
      </p>
      <p>
        <b>Category:</b> {product.data?.category.slug.toString().toUpperCase()}
      </p>
      <p>
        <b>Price:</b> ${product.data?.price} USD
      </p>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}
