/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
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

  const isInFilters = (value) => {
    return filters.indexOf(value) !== -1
  }

  const filterProducts = () => {
    const products = ProductsJson.results.filter((fProduct) => {
      return filters.includes(fProduct.data.category.id)
    })
    setFilteredProducts(products)
  }

  const resetLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleFilters = (e) => {
    const { checked, value } = e.target
    setIsLoading(true)

    if (checked) {
      filters.push(value)
      setFilters(filters)
    } else if (isInFilters(value)) {
      filters.splice(filters.indexOf(value), 1)
      setFilters(filters)
    }

    resetLoading()

    if (filters.length === 0) {
      setFilteredProducts(ProductsJson.results)
      return null
    }
    filterProducts()
  }

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
