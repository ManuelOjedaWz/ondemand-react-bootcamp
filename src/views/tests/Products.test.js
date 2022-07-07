import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from '../../App'

function renderProductPage () {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/products']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  })
}

test('Should show Categories sidebar when API call is done', async () => {
  renderProductPage()
  expect(await screen.findByTestId('products-layout--sidebar')).toBeInTheDocument()
})

test('Should render Pagination', async () => {
  renderProductPage()

  expect(await screen.findByTestId('product-pagination-component')).toBeInTheDocument()
})

test('Should render Pagination and Prev button should be disabled when first loaded', async () => {
  renderProductPage()

  expect(await screen.findByTestId('product-pagination-component')).toBeInTheDocument()
  expect(await screen.findByTestId('product-pagination-component-prev')).toBeInTheDocument()
  expect(await screen.findByTestId('product-pagination-component-prev')).toBeDisabled()
})

test('Should Pagination change when clicking next and prev', async () => {
  renderProductPage()
  const user = userEvent.setup()
  expect(await screen.findByTestId('product-pagination-component')).toBeInTheDocument()

  await user.click(await screen.findByTestId('product-pagination-component-next'))
  await user.click(await screen.findByTestId('product-pagination-component-prev'))
})

test('Should Next page button be disabled', async () => {
  renderProductPage()
  const user = userEvent.setup()
  expect(await screen.findByTestId('product-pagination-component')).toBeInTheDocument()

  expect(await screen.findByTestId('product-pagination-component-next')).toBeInTheDocument()
  expect(await screen.findByTestId('product-pagination-component-next')).toBeDisabled()
})
