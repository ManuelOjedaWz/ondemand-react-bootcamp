import React, { useCallback, useRef } from 'react'
import Category from '../../interfaces/Category'

interface ProductSidebarCheckboxProps {
  category: Category;
  onHandleFilter: any;
  filters: Array<string>;
}

export default function ProductSidebarCheckbox ({ category, onHandleFilter, filters }: ProductSidebarCheckboxProps) {
  const checkboxRef = useRef<any>()

  const handleCheck = useCallback((categoryId: string): any => {
    const result = filters.find((filter) => filter === categoryId)
    if (result && checkboxRef.current) {
      checkboxRef.current.checked = true
    }
  }, [checkboxRef])

  return (
    <input
      type="checkbox"
      value={category.id}
      onClick={onHandleFilter}
      id={`category-${category.id}`}
      ref={checkboxRef}
      onChange={handleCheck(category.id)}
    />
  )
}
