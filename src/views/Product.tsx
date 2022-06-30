import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useFetchProduct } from '../utils/hooks/useFetchProduct'
import IProduct from '../interfaces/Product'
import Gallery from '../components/Gallery'
import '../styles/Product.scss'
import { Button, Input } from '../styles/global'
import { useDispatch } from 'react-redux'
import { CartProduct, addToCart } from '../store/cartSlice'
import useAddToCart from '../utils/hooks/useAddToCart'

interface Spec {
  spec_name: string;
  spec_value: string;
}

export default function Product () {
  const { productId } = useParams()
  const { data, isLoading } = useFetchProduct(productId as string)
  const [product, setProduct] = useState<IProduct|null>(null)
  const { onHandleChange, handleAddToCart, number } = useAddToCart(product)

  useEffect(() => {
    if (!isLoading) {
      setProduct(data.results[0])
    }
  }, [data, isLoading])

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <section className='product'>
      <Link to='/products'>
        <Button>Return</Button>
      </Link>
      <Gallery images={product?.data.images} />

      <div className="product--body">
        <div className="product--description">
          <h1>{product?.data.name}</h1>
          <h3>Price: ${product?.data.price} USD</h3>
          <h3>SKU: {product?.data.sku}</h3>
          <h3>Category: {product?.data.category.slug}</h3>
        </div>

        <div className="product--add-to-cart">
          <p>
            {product?.data.description[0].text}
          </p>
          <h4>Specs:</h4>
          <ul>
            {
              product?.data.specs.map((spec: Spec, index: number) => (
                <li key={index}>
                  <b>{spec.spec_name}</b>: {spec.spec_value}
                </li>
              ))
            }
          </ul>

          <div className="product--input">
            <Input type="number" onChange={onHandleChange} value={number} min={0} max={product?.data.stock} />
            <Button
              disabled={product?.data.stock === 0}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
