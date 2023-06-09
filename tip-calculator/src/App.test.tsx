import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import App from './App';


describe('App', () => {
  it('renders logo', () => {
    render(<App />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders tip calculator', () => {
    render(<App />);
    const tipCalculatorElement = screen.getByTestId('tip-calculator');
    expect(tipCalculatorElement).toBeInTheDocument();
  });
});