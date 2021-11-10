import CounterProvider, { Counter, CounterContext } from './TestingContext'
import { cleanup, fireEvent, render } from '@testing-library/react'

import React from 'react'

const renderWithContext = (
  component) => {
  return {
    ...render(
        <CounterProvider value={CounterContext}>
            {component}
        </CounterProvider>)
  }
}

afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithContext(<Counter />)
    expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increments the counter', () => {
  const { getByTestId } = renderWithContext(<Counter />)

  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements the counter', () => {
  const { getByTestId} = renderWithContext(<Counter />)

  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('-1')
})