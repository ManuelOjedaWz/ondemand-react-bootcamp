/* eslint-disable react/prop-types */
import React from 'react'

export default function ProductItem ({ product }) {
  return (
    <div>
      <img src={product.data.mainimage.url} />
      <p>
        <b>Name:</b> {product.data.name}
      </p>
      <p>
        <b>Category:</b> {product.data.category.slug.toString().toUpperCase()}
      </p>
      <p>
        <b>Price:</b> ${product.data.price} USD
      </p>
    </div>
  )
}
