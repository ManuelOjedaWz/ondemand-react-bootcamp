/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BannersContext } from '../../providers/BannersProvider'
import './styles.scss'

export default function FeaturedSlider () {
  const { data, isLoading } = useContext(BannersContext)
  const [index, setIndex] = useState(0)
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

  useEffect(() => {
    resetTimeout()
    if (!isLoading && Object.keys(data).length !== 0) {
      timeoutRef.current = setInterval(() => {
        nextSlider()
      }, 5000)
    }
    return () => {
      resetTimeout()
    }
  }, [isLoading, data, index])

  return (
    <div className='home--slider'>
      <button className='home--slider-prevButton' onClick={prevSlider}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
      { isLoading && (<p>Loading ...</p>) }
      {
        data && data.results && (
          data.results.map((banner, bannerIndex) => {
            if (bannerIndex === index) {
              return (
                <div className='home--slider--container' key={banner.id}>
                  <img className='home--slider--container-image' src={banner.data.main_image.url} alt={banner.data.main_image.alt} />
                  <p>
                    { banner.data.title }
                  </p>
                </div>
              )
            }

            return null
          })
        )
      }

      <button className='home--slider-nextButton' onClick={nextSlider}>
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  )
}
