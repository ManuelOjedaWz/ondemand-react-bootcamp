import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FeaturedData } from '../../interfaces/Featured'
import { ProductsPaginationButton, ProductsPaginationWrapper } from './styled'
import { useSearchParams } from 'react-router-dom'

interface ProductsPaginationProps {
  products: FeaturedData;
  onHandleProductFetch: Function
}

interface ButtonProp {
  label: number
}

export default function ProductsPagination ({ products, onHandleProductFetch }: ProductsPaginationProps) {
  const [paginationButtons, setPaginationButtons] = useState<Array<ButtonProp>>([])
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string)
    : 1

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
    <ProductsPaginationWrapper>
      <ProductsPaginationButton
        disabled={!products.prev_page}
        onClick={() => onHandleProductFetch(getPage((products.prev_page as string)))}
      >
        Prev
      </ProductsPaginationButton>
      {
        paginationButtons.map((value, index) => (
          <ProductsPaginationButton
            active={page === value.label}
            onClick={() => onHandleProductFetch(value.label)}
            key={index}
          >
            {value.label}
          </ProductsPaginationButton>
        ))
      }
      <ProductsPaginationButton
        disabled={!products.next_page}
        onClick={() => onHandleProductFetch(getPage((products.next_page as string)))}
      >
        Next
      </ProductsPaginationButton>
    </ProductsPaginationWrapper>
  )
}

ProductsPagination.propTypes = {
  products: PropTypes.object,
  onHandleProductFetch: PropTypes.func
}
