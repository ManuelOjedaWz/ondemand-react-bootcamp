import { API_BASE_URL } from '../constants'
import { useBaseAPI } from './useBaseAPI'
import { useLatestAPI } from './useLatestAPI'

export function useFetchProduct (productId: string) {
  const {
    ref: apiRef
  } = useLatestAPI()

  const filter = `[[at(document.id, "${productId}")]]`
  const URL: string = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(filter)}`
  const { featured } = useBaseAPI(URL)

  return featured
}
