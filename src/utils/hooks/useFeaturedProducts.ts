import { useState, useEffect } from 'react'
import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedProducts () {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [featuredProducts, setFeaturedProducts] = useState<Featured>(() => ({
    data: {},
    isLoading: true
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    const getFeaturedCategories = async () => {
      try {
        setFeaturedProducts({
          data: {},
          isLoading: true
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            '[[at(document.tags, ["Featured"])]]'
          )}&lang=en-us&pageSize=16`,
          {
            signal: controller.signal
          }
        )

        const data = await response.json()
        setFeaturedProducts({ data, isLoading: false })
      } catch (error) {
        setFeaturedProducts({ data: {}, isLoading: false })
        console.error(error)
      }
    }

    getFeaturedCategories()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return featuredProducts
}
