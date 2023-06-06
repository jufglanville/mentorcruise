import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TipOutputContainer from './TipOutputContainer';

const output = {
  tipAmount: 10,
  total: 20.23,
  currency: '$',
  active: true,
};

describe('TipOutputContainer', () => {
  it('renders TipOutputContainer without errors', () => {
    render(<TipOutputContainer data={output} onReset={() => {}} />);
  });

  it('displays the correct amount values', () => {
    render(<TipOutputContainer data={output} onReset={() => {}} />);

    const tipAmountHeading = screen.getByText('Tip Amount');
    const tipAmount = screen.getByText('$10.00');
    const totalAmountHeading = screen.getByText('Total');
    const totalAmount = screen.getByText('$20.23');

    expect(tipAmountHeading).not.toBeNull();
    expect(tipAmount).not.toBeNull();
    expect(totalAmountHeading).not.toBeNull();
    expect(totalAmount).not.toBeNull();
  });
  
  it('calls the onChange function when the reset button is clicked', () => {
    const handleChange = jest.fn();
    render(<TipOutputContainer data={output} onReset={handleChange} />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);

    expect(handleChange).toHaveBeenCalled();
  });
});
