import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../constants'

const INITIAL_API_METADATA = { ref: null, isLoading: true }

export function useLatestAPI () {
  const [apiMetadata, setApiMetadata] = useState(() => INITIAL_API_METADATA)

  useEffect(() => {
    const controller = new AbortController()

    async function getAPIMetadata () {
      try {
        setApiMetadata(INITIAL_API_METADATA)

        const response = await axios.get(API_BASE_URL, {
          signal: controller.signal
        })
        const { refs: [{ ref } = {}] = [] } = await response.data

        setApiMetadata({ ref, isLoading: false })
      } catch (err) {
        setApiMetadata({ ref: null, isLoading: false })
        console.error(err)
      }
    }

    getAPIMetadata()

    return () => {
      controller.abort()
    }
  }, [])

  return apiMetadata
}
