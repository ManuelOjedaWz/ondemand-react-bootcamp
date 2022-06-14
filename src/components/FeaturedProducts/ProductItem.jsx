import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
      <Link to={`/product/${product.id}`}>
        Details
      </Link>
      <button>Add to cart</button>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}
