import { useState, useEffect } from 'react'
import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useBaseAPI (filter: string, size: number): Featured {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [featured, setFeatured] = useState<Featured>(() => ({
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
        setFeatured({
          data: {},
          isLoading: true
        })

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            filter
          )}&lang=en-us&pageSize=${size}`,
          {
            signal: controller.signal
          }
        )

        const data = await response.json()
        setFeatured({ data, isLoading: false })
      } catch (error) {
        setFeatured({ data: {}, isLoading: false })
        console.error(error)
      }
    }

    getFeaturedCategories()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return featured
}
