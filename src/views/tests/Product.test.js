import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

function renderProductPage (productId) {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/product/${productId}`]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  })
}

test('Should render product data when API is done', async () => {
  renderProductPage('YWL8XBIAAC0AzuPZ')

  expect(await screen.findByTestId('product')).toBeInTheDocument()
})

test('Should render product detail', async () => {
  renderProductPage('YWL8XBIAAC0AzuPZ')

  expect(await screen.findByTestId('product')).toBeInTheDocument()
  expect(await screen.findByTestId('product-name')).toBeInTheDocument()
  expect(await screen.findByTestId('product-price')).toBeInTheDocument()
  expect(await screen.findByTestId('product-sku')).toBeInTheDocument()
  expect(await screen.findByTestId('product-tags')).toBeInTheDocument()
  expect(await screen.findByTestId('product-category')).toBeInTheDocument()
  expect(await screen.findByTestId('product-description')).toBeInTheDocument()
})

test('Should validate Add to Cart functionality', async () => {
  renderProductPage('YWL8XBIAAC0AzuPZ')

  const input = await screen.findByTestId('product-add-to-cart-input')
  expect(input).toBeInTheDocument()
  expect(input).toHaveAttribute('min', '0')
  expect(input).toHaveAttribute('max', '4')
})

test('Should validate Add to Cart button is disabled when stock is zero', async () => {
  renderProductPage('YWJKhBIAACkAy8ew')

  const button = await screen.findByTestId('product-add-to-cart-button')
  expect(button).toBeInTheDocument()
  expect(button).toBeDisabled()
})
