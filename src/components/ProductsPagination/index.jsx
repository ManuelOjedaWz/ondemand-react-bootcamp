import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default function ProductsPagination ({ products, onHandleProductFetch }) {
  const [paginationButtons, setPaginationButtons] = useState([])

  useEffect(() => {
    const buttons = []
    for (let index = 0; index < products.total_pages; index++) {
      buttons.push(...paginationButtons, {
        label: index + 1
      })
      setPaginationButtons(buttons)
    }
  }, [products])

  const getPage = (link) => {
    if (!link) {
      return null
    }
    const url = new URL(link)
    return url.searchParams.get('page')
  }

  return (
    <div
      className='products-pagination'
    >
      <button
        disabled={!products.prev_page}
        onClick={() => onHandleProductFetch(getPage(products.prev_page))}
      >
        Prev
      </button>
      {
        paginationButtons.map((value, index) => (
          <button
            onClick={() => onHandleProductFetch(value.label)}
            key={index}
          >
            {value.label}
          </button>
        ))
      }
      <button
        disabled={!products.next_page}
        onClick={() => onHandleProductFetch(getPage(products.next_page))}
      >
        Next
      </button>
    </div>
  )
}

ProductsPagination.propTypes = {
  products: PropTypes.object,
  onHandleProductFetch: PropTypes.func
}
