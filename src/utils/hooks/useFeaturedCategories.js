import { useState, useEffect } from 'react'
import FeaturedCategories from '../../mocks/en-us/product-categories.json'

export function useFeaturedCategories () {
  const [featuredCategories, setFeaturedCategories] = useState(() => ({
    data: {},
    isLoading: true
  }))

  useEffect(() => {
    async function getFeaturedCategories () {
      try {
        setFeaturedCategories({
          data: {},
          isLoading: true
        })

        setFeaturedCategories({ data: FeaturedCategories, isLoading: false })
      } catch (error) {
        setFeaturedCategories({
          data: {},
          isLoading: true
        })
        console.error(error)
      }
    }

    getFeaturedCategories()
  }, [])

  return featuredCategories
}
