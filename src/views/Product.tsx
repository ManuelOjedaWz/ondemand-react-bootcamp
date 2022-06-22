import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useFetchProduct } from '../utils/hooks/useFetchProduct'
import IProduct from '../interfaces/Product'
import Gallery from '../components/Gallery'
import '../styles/Product.scss'

interface Spec {
  spec_name: string;
  spec_value: string;
}

export default function Product () {
  const { productId } = useParams()
  const { data, isLoading } = useFetchProduct(productId as string)
  const [number, setNumber] = useState<number>(0)
  const [product, setProduct] = useState<IProduct|null>(null)

  useEffect(() => {
    if (!isLoading) {
      setProduct(data.results[0])
    }
  }, [data, isLoading])

  const onHandleChange = (e: React.ChangeEvent) => {
    const { value } = (e.target as HTMLInputElement)
    setNumber(parseInt(value, 10))
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <section className='product'>
      <Link to='/products'>
        <button>Return</button>
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
            <input type="number" onChange={onHandleChange} value={number} min={0} />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
