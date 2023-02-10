import { render, screen } from '@testing-library/react';

import App from './App';

test('renders React Essential Training', () => {
  render(<App />)
  const linkElement = screen.getByText(/React Essential Training/i)
  expect(linkElement).toBeInTheDocument()
})
