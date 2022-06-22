import React from 'react'
import { Link } from 'react-router-dom'
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts'
import Product from '../../interfaces/Product'
import Spinner from '../Spinner'
import ProductItem from './ProductItem'
import './styles.scss'
import { useSelector } from 'react-redux'
import { getFeaturedProducts } from '../../store/featuredProductsSlice'

export default function FeaturedProducts () {
  const { data, isLoading } = useSelector(getFeaturedProducts)
  const { results }: { results: Array<Product> } = data

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <section className='featured-products'>
      <h3 className='title'>Featured Products</h3>

      <div className="featured-products--grid">
        { results.map((product: Product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        }) }
      </div>

      <div className="featured-products--button">
        <Link to='/products'>
          <button>
            View all products
          </button>
        </Link>
      </div>
    </section>
  )
}
