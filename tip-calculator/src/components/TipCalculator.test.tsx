import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TipCalculator from './TipCalculator';

describe('TipCalculator', () => {
  it('renders TipCalculator without errors', () => {
    render(<TipCalculator />);
  });

  it('renders the Tip Input components', () => {
    render(<TipCalculator />);
    const billInput = screen.getByText('Bill');
    const tipInput = screen.getByText('Select Tip %');
    const peopleInput = screen.getByText('Number of People');

    expect(billInput).toBeInTheDocument();
    expect(tipInput).toBeInTheDocument();
    expect(peopleInput).toBeInTheDocument();
  });

  it('renders the Tip Ouput components', () => {
    render(<TipCalculator />);
    const tipOutput = screen.getByText('Tip Amount');
    const total = screen.getByText('Total');
    const resetButton = screen.getByText('RESET');

    expect(tipOutput).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
});
