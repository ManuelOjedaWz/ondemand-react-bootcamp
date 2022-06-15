import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

export function useSearch () {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [controller] = useState(new AbortController())
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState<Featured>(() => ({
    data: {},
    isLoading: true
  }))

  const getProducts = async () => {
    try {
      setSearch({
        data: {},
        isLoading: true
      })

      const filter = `[[fulltext(document, "${searchParams.get('q')}")]]`
      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&q=${encodeURIComponent(
          filter
        )}&lang=en-us&pageSize=20`,
        {
          signal: controller.signal
        }
      )

      const data = await response.json()
      setSearch({ data, isLoading: false })
    } catch (error) {
      setSearch({ data: {}, isLoading: false })
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

  return search
}
