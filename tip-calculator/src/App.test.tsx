import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';
import React from 'react';

test('renders example component', () => {
  render(<App />);
  const heading = screen.getByText(/App/i);
  expect(heading).toBeInTheDocument()
});