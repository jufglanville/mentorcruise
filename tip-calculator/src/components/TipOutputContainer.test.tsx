import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TipOutputContainer from './TipOutputContainer';

const output= {
  getTipAmount: () => 10,
  getTipTotal: () => 20.23,
  getActive: () => true,
  getCurrency: () => '$'
}

describe('TipOutputContainer', () => {
  it('renders TipOutputContainer without errors', () => {
    render(<TipOutputContainer tip={output} onReset={() => {}} />);
  });

  it('displays the correct amount values', () => {
    render(<TipOutputContainer tip={output} onReset={() => {}} />);

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
    render(<TipOutputContainer tip={output} onReset={handleChange} />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);

    expect(handleChange).toHaveBeenCalled();
  });
});
