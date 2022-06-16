import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { FeaturedData } from '../../interfaces/Featured'

interface ProductsPaginationProps {
  products: FeaturedData;
  onHandleProductFetch: Function
}

interface ButtonProp {
  label: number
}

export default function ProductsPagination ({ products, onHandleProductFetch }: ProductsPaginationProps) {
  const [paginationButtons, setPaginationButtons] = useState<Array<ButtonProp>>([])

  useEffect(() => {
    const newButtons = Array
      .from({ length: (products.total_pages as number) }, (_, i) => i + 1)
      .map(label => ({ label }))
    setPaginationButtons(newButtons)
  }, [products])

  const getPage = (link: string) => {
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
        onClick={() => onHandleProductFetch(getPage((products.prev_page as string)))}
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
        onClick={() => onHandleProductFetch(getPage((products.next_page as string)))}
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
