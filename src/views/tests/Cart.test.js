import React from 'react'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from '../../App'
import { clearCart } from '../../store/cartSlice'

function renderCartPage (route) {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  })
}

afterEach(() => {
  store.dispatch(clearCart())
})

test('Should render an empty table when there is no product in cart', async () => {
  renderCartPage('/cart')

  await act(async () => {
    expect(await screen.findByTestId('cart-page')).toBeInTheDocument()
    expect(await screen.findByTestId('cart-table')).toBeInTheDocument()
    const bodyTable = await screen.findByTestId('cart-table-body')

    // If is 1 means is only rendering the subtotal/total row
    expect(bodyTable.childNodes.length).toBe(1)
  })
})

test('Should show cart with items', async () => {
  renderCartPage('/')
  const user = userEvent.setup()
  expect(await screen.findByTestId('featured-products')).toBeInTheDocument()

  const featuredProductsButtons = await screen.findAllByTestId(/^product-item-*/)
  for (let count = 0; count < 3; count++) {
    const button = featuredProductsButtons[count]
    await user.click(button)
  }

  await user.click(await screen.findByTestId('cart-icon-button'))
  expect(await screen.findByTestId('cart-page')).toBeInTheDocument()
  expect(await screen.findByTestId('cart-table')).toBeInTheDocument()
  const bodyTable = await screen.findByTestId('cart-table-body')

  // Total row + 3 click from test
  expect(bodyTable.childNodes.length).toBe(4)

  const productsInTable = await screen.findAllByTestId(/^cart-table-row-*/)

  productsInTable.forEach((product) => {
    expect(product.getElementsByClassName('cart-remove-button')[0]).toBeInTheDocument()
    expect(product.getElementsByTagName('img')[0]).toBeInTheDocument()
    expect(product.getElementsByClassName('cart-table-body--product-name')[0]).toBeInTheDocument()
    expect(product.getElementsByClassName('cart-table-body--product-price')[0]).toBeInTheDocument()
    expect(product.getElementsByClassName('cart-table-body--input')[0]).toBeInTheDocument()
    expect(product.getElementsByClassName('cart-table-body--product-subtotal')[0]).toBeInTheDocument()
  })
})

test('Should total and the sum of subtotal be equal', async () => {
  renderCartPage('/')
  const user = userEvent.setup()
  expect(await screen.findByTestId('featured-products')).toBeInTheDocument()

  const featuredProductsButtons = await screen.findAllByTestId(/^product-item-*/)
  for (let count = 0; count < 3; count++) {
    const button = featuredProductsButtons[count]
    await user.click(button)
  }

  await user.click(await screen.findByTestId('cart-icon-button'))

  const productsInTable = await screen.findAllByTestId(/^cart-table-row-*/)

  let total = 0
  productsInTable.forEach((product) => {
    total += parseFloat(product.getElementsByClassName('cart-table-body--product-subtotal')[0].innerHTML)
  })

  // Validating total
  const totalCell = await screen.findByTestId('cart-table-total')
  expect(totalCell.innerHTML).toBe(total.toFixed(2))
})

test('should be able to update quantity in cart view', async () => {
  renderCartPage('/')
  const user = userEvent.setup()
  expect(await screen.findByTestId('featured-products')).toBeInTheDocument()

  const featuredProductsButtons = await screen.findAllByTestId(/^product-item-*/)
  for (let count = 0; count < 1; count++) {
    const button = featuredProductsButtons[count]
    await user.click(button)
  }

  await user.click(await screen.findByTestId('cart-icon-button'))

  const input = await screen.findAllByTestId(/^cart-table-body--input-*/)
  const prevValue = parseInt(input[0].value)
  await user.click(input[0])
  await user.keyboard('{Backspace>1/}')
  await user.keyboard('2')
  expect(parseInt(input[0].value)).toBeGreaterThan(prevValue)
})

test('Should be able to remove items from cart view', async () => {
  renderCartPage('/')
  const user = userEvent.setup()
  expect(await screen.findByTestId('featured-products')).toBeInTheDocument()

  const featuredProductsButtons = await screen.findAllByTestId(/^product-item-*/)
  for (let count = 0; count < 3; count++) {
    const button = featuredProductsButtons[count]
    await user.click(button)
  }

  await user.click(await screen.findByTestId('cart-icon-button'))

  const productsInTable = await screen.findAllByTestId(/^cart-remove-button-*/)

  act(() => {
    productsInTable.forEach(async (product) => {
      await product.click()
    })
  })

  const bodyTable = await screen.findByTestId('cart-table-body')

  // Should be after removing all items from cart
  expect(bodyTable.childNodes.length).toBe(1)
})
