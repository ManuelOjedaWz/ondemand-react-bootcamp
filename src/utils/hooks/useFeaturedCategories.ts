import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useBaseAPI } from './useBaseAPI'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedCategories (): Featured {
  const {
    ref: apiRef
  } = useLatestAPI()

  const URL: string = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    '[[at(document.type, "category")]]'
  )}&lang=en-us&pageSize=30`

  const { featured } = useBaseAPI(URL)

  return featured
}
