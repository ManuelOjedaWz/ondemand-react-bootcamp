import { useState, useEffect } from 'react'
import Featured from '../../interfaces/Featured'
import { useLatestAPI } from './useLatestAPI'
import axios from 'axios'

const initialState = {
  data: {
    results: []
  },
  isLoading: true
}

export function useBaseAPI (url: string) {
  const {
    ref: apiRef,
    isLoading: isApiMetadataLoading
  } = useLatestAPI()

  const [featured, setFeatured] = useState<Featured>(() => initialState)
  const controller = new AbortController()

  const fetchFromAPI = async () => {
    try {
      setFeatured(initialState)
      const response = await axios.get(url, {
        signal: controller.signal
      })

      const { data } = await response
      setFeatured({
        data,
        isLoading: false
      })
    } catch (err) {
      setFeatured(initialState)
      console.error(err)
    }
  }

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    fetchFromAPI()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading])

  return {
    featured,
    fetchFromAPI
  }
}
