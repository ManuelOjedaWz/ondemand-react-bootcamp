import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProducts () {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [controller] = useState(new AbortController())
  const [searchParams] = useSearchParams()

  const [products, setProducts] = useState<Featured>(() => ({
    data: {},
    isLoading: true
  }))

  const getProducts = async (page = 1) => {
    try {
      setProducts({
        data: {},
        isLoading: true
      })

      let URL: string = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&page=${page}&pageSize=12`

      if (searchParams.get('category')) {
        let categoryFilter: string = ''
        categoryFilter = `[[at(my.product.category,"${searchParams.get('category')}")]]`
        if (searchParams.get('category')?.includes('|')) {
          let filter = '['
          searchParams.get('category')?.split('|').forEach((category, index) => {
            if (searchParams.get('category')?.split('|').length === index + 1) {
              filter += `"${category}"`
            } else {
              filter += `"${category}",`
            }
          })
          filter += ']'
          categoryFilter = `[[any(my.product.category,${filter})]]`
        }
        URL = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(categoryFilter)}&lang=en-us&page=${page}&pageSize=12`
      }

      const response = await fetch(
        URL,
        {
          signal: controller.signal
        }
      )

      const data = await response.json()
      setProducts({ data, isLoading: false })
    } catch (error) {
      setProducts({ data: {}, isLoading: false })
      console.error(error)
    }
  }

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    getProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return { products, getProducts }
}
