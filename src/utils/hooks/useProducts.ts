import { useState, useEffect } from 'react'
import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useProducts () {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [controller] = useState(new AbortController())

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

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&lang=en-us&page=${page}&pageSize=12`,
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
