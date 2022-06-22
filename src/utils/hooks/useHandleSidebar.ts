import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const useHandleSidebar = (categories: any[] = []) => {
  const [filters, setFilters] = useState<Array<string>>([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const categoryId: string|null = searchParams.get('category')

    if (!categoryId) {
      return
    }

    if (categoryId?.includes('|')) {
      const categories = categoryId.split('|')
      setFilters([...filters, ...categories])
      return
    }

    setFilters([...filters, categoryId as string])
  }, [categories])

  const handleFilters = (e: Event) => {
    const { checked, value } = (e.target as HTMLInputElement)
    let categoriesValue: string = ''
    const categoriesId: string|null = searchParams.get('category')
    if (checked) {
      categoriesValue = categoriesId
        ? `${categoriesId}|${value}`
        : value
      navigate(`/products?category=${categoriesValue}`)
      navigate(0)
      return null
    }

    const categories = categoriesId?.split('|')
    if (categoriesId && (categories as Array<string>).length >= 1) {
      const categoriesFilters = (categories as Array<string>).filter((category) => category !== value)

      categoriesFilters?.forEach((category, index) => {
        if (categoriesFilters.length !== index + 1) {
          categoriesValue += `${category}|`
          return
        }

        categoriesValue += `${category}`
      })
      navigate(`/products?category=${categoriesValue}`)
      navigate(0)
    }
  }

  const handleClearFilter = () => {
    setFilters([])
    navigate('/products')
    navigate(0)
  }

  return {
    handleClearFilter,
    handleFilters,
    filters
  }
}

export default useHandleSidebar
