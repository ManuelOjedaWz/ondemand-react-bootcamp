import React from 'react'
import ProductsSidebar from '../components/ProductsSidebar'
import '../styles/Products.scss'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import ProductsPagination from '../components/ProductsPagination'
import Spinner from '../components/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { useProducts } from '../utils/hooks/useProducts'
import { useSelector } from 'react-redux'
import { getCategories } from '../store/categoriesSlice'
import { Button } from '../components/FeaturedProducts/styles'
import List from '../components/List'

export default function Products () {
  const navigate = useNavigate()
  const { featured: products } = useProducts()

  const handleProductFetch = (page: number) => {
    const url = new URL(window.location.href)
    url.searchParams.set('page', page.toString())
    navigate(`${url.pathname}${url.search}`)
    navigate(0)
  }

  return (
    <section className='products-layout'>
      <ProductsSidebar />
      <div className="products-layout--products">
        <Link to='/home'>
          <Button>
            Return to home
          </Button>
        </Link>

        <h4>
          Products found: {products.data.total_results_size}
        </h4>

        {
          products.isLoading
            ? <Spinner />
            : (
                <div className="products-layout-products-grid">
                  <List items={products.data.results} itemComponent={ProductItem} prop="product" />
                </div>
              )
        }

        {
          !products.isLoading && (
            <ProductsPagination products={products.data} onHandleProductFetch={handleProductFetch} />
          )
        }
      </div>
    </section>
  )
}
