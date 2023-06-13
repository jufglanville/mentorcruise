import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AmountOutput from './AmountOutput';
import React from 'react';

describe('AmountOutput', () => {
  it('renders with correct label', () => {
    render(<AmountOutput label="Test Amount" value={0} />);
    const heading = screen.getByText(/test amount/i);
    expect(heading).toBeInTheDocument()
  });

  it('renders with correct value', () => {
    render(<AmountOutput label="Test Amount" value={100} />);
    const amount = screen.getByText(/100.00/i);
    expect(amount).toBeInTheDocument()
  });

  it('correctly renders with rounded up value to two decimal points', () => {
    render(<AmountOutput label="Test Amount" value={100.137} />);
    const amount = screen.getByText(/100.14/i);
    expect(amount).toBeInTheDocument()
  });

  it('correctly renders with rounded down value to two decimal points', () => {
    render(<AmountOutput label="Test Amount" value={100.134} />);
    const amount = screen.getByText(/100.13/i);
    expect(amount).toBeInTheDocument()
  });
});