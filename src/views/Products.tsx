import React, { useState, useEffect, useCallback } from 'react'
import ProductsSidebar from '../components/ProductsSidebar'
import ProductCategories from '../mocks/en-us/product-categories.json'
import ProductsJson from '../mocks/en-us/products.json'
import '../styles/Products.scss'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import ProductsPagination from '../components/ProductsPagination'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

export default function Products () {
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<Array<string>>([])
  const [filteredProducts, setFilteredProducts] = useState(ProductsJson.results)

  const resetLoading = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [setIsLoading])

  const handleFilters = (e: Event) => {
    const { checked, value } = (e.target as HTMLInputElement)
    setIsLoading(true)
    const newFilters = checked
      ? [...filters, value]
      : filters.filter(i => i !== value)
    setFilters(newFilters)
    resetLoading()
  }
  useEffect(() => {
    const newProducts = filters.length === 0
      ? ProductsJson.results
      : ProductsJson.results.filter(
        p => filters.includes(p.data.category.id)
      )
    setFilteredProducts(newProducts)
  }, [filters, ProductsJson.results])

  useEffect(() => {
    resetLoading()
  }, [])

  return (
    <section className='products-layout'>
      <ProductsSidebar
        categories={ProductCategories?.results}
        onHandleFilter={handleFilters}
        filters={filters}
      />
      <div className="products-layout--products">
        <h1>This is Product List Page</h1>
        <Link to='/home'>
          <button>
            Return to home
          </button>
        </Link>

        <h4>
          Products found: {filteredProducts.length}
        </h4>

          {
            isLoading
              ? <Spinner />
              : (
                <div className="products-layout-products-grid">
                  {
                  filteredProducts.map((product, index) => {
                    return (
                      <ProductItem product={product} key={index} />
                    )
                  })}
                </div>
                )
          }
        {
          filteredProducts.length === 0 && !isLoading && (
            <h1>Products not found</h1>
          )
        }

        <ProductsPagination products={ProductsJson} />
      </div>
    </section>
  )
}
