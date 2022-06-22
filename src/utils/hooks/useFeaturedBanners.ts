import Featured from '../../interfaces/Featured'
import { API_BASE_URL } from '../constants'
import { useBaseAPI } from './useBaseAPI'
import { useLatestAPI } from './useLatestAPI'

export function useFeaturedBanners (): Featured {
  const {
    ref: apiRef
  } = useLatestAPI()

  const URL: string = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    '[[at(document.type, "banner")]]'
  )}&lang=en-us&pageSize=5`

  const { featured } = useBaseAPI(URL)

  return featured
}
