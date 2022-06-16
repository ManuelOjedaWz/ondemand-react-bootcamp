import { useSearchParams } from 'react-router-dom'
import { API_BASE_URL } from '../constants'
import { useBaseAPI } from './useBaseAPI'
import { useLatestAPI } from './useLatestAPI'

export function useProducts () {
  const {
    ref: apiRef
  } = useLatestAPI()

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1

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

  const { featured } = useBaseAPI(URL)

  return { featured }
}
