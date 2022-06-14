/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import ProductsSidebar from '../components/ProductsSidebar'
import ProductCategories from '../mocks/en-us/product-categories.json'
import ProductsJson from '../mocks/en-us/products.json'
import '../styles/Products.scss'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import ProductsPagination from '../components/ProductsPagination'
import Spinner from '../components/Spinner'

export default function Products ({ onHandleLinkPage }) {
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(ProductsJson.results)

  const resetLoading = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [setIsLoading])

  const handleFilters = (e) => {
    const { checked, value } = e.target
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
        <button onClick={() => onHandleLinkPage('home')}>
          Return to home
        </button>

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

Products.propTypes = {
  onHandleLinkPage: PropTypes.func
}
