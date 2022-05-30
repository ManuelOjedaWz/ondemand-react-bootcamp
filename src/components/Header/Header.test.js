/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'

test('Logo and title should be rendered', () => {
  render(<Header />)
  const logoElement = screen.getByRole('img')
  const titleElement = screen.getByText('E-Commerce')

  expect(logoElement).toBeInTheDocument()
  expect(titleElement).toBeInTheDocument()
})
