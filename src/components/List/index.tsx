import React from 'react'
import Category from '../../interfaces/Category'
import Product from '../../interfaces/Product'

interface ListProps {
  items: Array<Category|Product>,
  itemComponent: any
  prop: string;
}

export default function List ({
  items,
  itemComponent: ItemComponent,
  prop
}: ListProps) {
  return (
    <>
    {
      items.map((item, i) => {
        return (
          <ItemComponent key={i} {...{ [prop]: item }} />
        )
      })
    }
    </>
  )
}
