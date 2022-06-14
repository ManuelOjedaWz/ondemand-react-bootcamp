import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFetchProduct (productId: string) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()
  const [product, setProducts] = useState(() => ({
    data: {},
    isLoading: true
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getProduct () {
      try {
        setProducts({ data: {}, isLoading: true })

        const filter = `[[at(document.id, "${productId}")]]`

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            filter
          )}`,
          {
            signal: controller.signal
          }
        )
        const data = await response.json()

        setProducts({ data, isLoading: false })
      } catch (err) {
        setProducts({ data: {}, isLoading: false })
        console.error(err)
      }
    }

    getProduct()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return product
}
