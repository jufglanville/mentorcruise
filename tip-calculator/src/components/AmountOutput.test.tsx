import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AmountOutput from './AmountOutput';

describe('AmountOutput', () => {
  it('renders the label and value correctly', () => {
    const label = 'Total Amount';
    const value = 12.23;
    const currency = '$';

    render(<AmountOutput id='id' label={label} value={value} currency={currency} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(`${currency}${value}`);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it('renders values to two decimal places', () => {
    const label = 'Total Amount';
    const value = 100;

    render(<AmountOutput id='id' label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(`${value.toFixed(2)}`);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
