import React, { useState, useEffect, useCallback } from 'react'
import ProductsSidebar from '../components/ProductsSidebar'
import ProductsJson from '../mocks/en-us/products.json'
import '../styles/Products.scss'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import ProductsPagination from '../components/ProductsPagination'
import Spinner from '../components/Spinner'
import { Link, useSearchParams } from 'react-router-dom'
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories'
import { useProducts } from '../utils/hooks/useProducts'

export default function Products () {
  const [searchParams] = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<Array<string>>([])
  const { products, getProducts } = useProducts()
  const { data: fetchedProducts, isLoading: isLoadingProducts } = products
  const [filteredProducts, setFilteredProducts] = useState(ProductsJson.results)
  const {
    data: categories,
    isLoading: isLoadingCategories
  } = useFeaturedCategories()

  const handleCheckInput = (id: string|null, value: boolean = true) => {
    const categoryToBeHandled: any = document.getElementById(`category-${id}`)
    if (categoryToBeHandled) {
      categoryToBeHandled.checked = value
    }
  }

  const handleClearFilter = () => {
    filters.forEach((filter) => handleCheckInput(filter, false))
    setFilters([])
  }

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

  const handleProductFetch = (page: number) => {
    getProducts(page)
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

  useEffect(() => {
    if (searchParams.get('category')) {
      const categoryId: string|null = searchParams.get('category')
      handleCheckInput(categoryId)
      setFilters([...filters, categoryId as string])
    }
  }, [categories])

  return (
    <section className='products-layout'>
      <ProductsSidebar
        categories={categories?.results}
        onHandleFilter={handleFilters}
        onHandleClearFilter={handleClearFilter}
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
          Products found: {fetchedProducts.total_results_size}
        </h4>

          {
            isLoadingProducts
              ? <Spinner />
              : (
                <div className="products-layout-products-grid">
                  {
                  fetchedProducts.results.map((product: any, index: any) => {
                    return (
                      <ProductItem product={product} key={index} />
                    )
                  })}
                </div>
                )
          }
        {
          // products.results.length === 0 && !isLoadingProducts && (
          //   <h1>Products not found</h1>
          // )
        }

        {
          !isLoadingProducts && (
            <ProductsPagination products={fetchedProducts} onHandleProductFetch={handleProductFetch} />
          )
        }
      </div>
    </section>
  )
}
