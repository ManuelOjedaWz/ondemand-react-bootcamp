import { useSearchParams } from 'react-router-dom'
import { API_BASE_URL } from '../constants'
import { useBaseAPI } from './useBaseAPI'
import { useLatestAPI } from './useLatestAPI'

export function useSearch () {
  const {
    ref: apiRef
  } = useLatestAPI()

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1

  const filter = `[[fulltext(document, "${searchParams.get('q')}")]]`
  const URL: string = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "product")]]'
    )}&q=${encodeURIComponent(
      filter
    )}&lang=en-us&page=${page}&pageSize=20`

  const { featured } = useBaseAPI(URL)

  return { featured }
}
