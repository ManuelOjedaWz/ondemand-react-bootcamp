import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Product from '../../interfaces/Product'
import { ProductItemWrapper, ProductItemGrid } from './styles'
import { Button } from '../../styles/global'
import useAddToCart from '../../utils/hooks/useAddToCart'

interface ProductItemProps {
  product: Product
}

export default function ProductItem ({ product }: ProductItemProps) {
  const { handleAddToCart } = useAddToCart(product)
  const {
    data: { mainimage, name, category, price }
  } = product

  return (
    <ProductItemWrapper>
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
      <ProductItemGrid>
        <Link to={`/product/${product.id}`}>
          <Button>
            Details
          </Button>
        </Link>
        <Button
          disabled={product.data.stock === 0}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </ProductItemGrid>
    </ProductItemWrapper>
  )
}

ProductItem.propTypes = {
  product: PropTypes.object
}
