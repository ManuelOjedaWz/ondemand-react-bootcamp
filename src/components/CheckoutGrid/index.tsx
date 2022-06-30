import React, { FormEvent, FormEventHandler, useState } from 'react'
import { CartProduct } from '../../store/cartSlice'
import { Input, Subtitle, TextArea } from '../../styles/global'
import CheckoutTable from './Table'
import { CheckoutGridForm, CheckoutGridTable, CheckoutGridWrapper } from './styled'
import { Button } from '../FeaturedProducts/styled'
import { Link } from 'react-router-dom'

interface CheckoutGridProps {
  products: Array<CartProduct>
}

export default function CheckoutGrid () {
  const [form, setForm] = useState<any>({
    name: '',
    email: '',
    zipCode: '',
    notes: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = (e: any) => {
    const { name, value } = (e.target as HTMLInputElement)
    form[name] = value
    setForm({
      ...form
    })
  }

  return (
    <CheckoutGridWrapper>
      <div>
        <Subtitle>Summary</Subtitle>

        <CheckoutTable />
      </div>
      <CheckoutGridForm onSubmit={handleSubmit}>
        <Subtitle>Form</Subtitle>

        <div>
          <label>Name <sup>*</sup></label>
          <Input type="text" value={form.name} onChange={handleChange} name="name" required />
        </div>

        <div>
          <label>Email <sup>*</sup></label>
          <Input type="email" value={form.email} onChange={handleChange} name="email" required />
        </div>

        <div>
          <label>Zip Code <sup>*</sup></label>
          <Input type="text" value={form.zipCode} onChange={handleChange} name="zipCode" required />
        </div>

        <div>
          <label>Notes</label>
          <TextArea value={form.notes} rows={10} onChange={handleChange} name="notes">
          </TextArea>
        </div>

        <div className="buttons">
          <Link to='/cart'>
            <Button>Go back to cart</Button>
          </Link>
          <Button>Place order</Button>
        </div>
      </CheckoutGridForm>
    </CheckoutGridWrapper>
  )
}
