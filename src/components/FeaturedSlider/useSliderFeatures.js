import { useRef } from 'react'

export function useSliderFeatures ({ data, isLoading, index, setIndex }) {
  const timeoutRef = useRef(null)
  function resetTimeout () {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current)
    }
  }

  const prevSlider = () => {
    resetTimeout()
    if (index === 0) {
      setIndex(data.results.length - 1)
      return null
    }
    setIndex((prevIndex) => prevIndex - 1)
  }

  const nextSlider = () => {
    if (index === data.results.length - 1) {
      setIndex(0)
      return null
    }
    setIndex((prevIndex) => prevIndex + 1)
  }

  // useEffect(() => {
  //   resetTimeout()
  //   if (!isLoading && Object.keys(data).length !== 0) {
  //     timeoutRef.current = setInterval(() => {
  //       nextSlider()
  //     }, 5000)
  //   }
  //   return () => {
  //     resetTimeout()
  //   }
  // }, [isLoading, data, index])

  return {
    prevSlider,
    nextSlider
  }
}
