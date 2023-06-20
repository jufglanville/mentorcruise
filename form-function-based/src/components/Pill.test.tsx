import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pill from './Pill';

describe('Pill component', () => {
  const defaultProps = {
    children: 'Pill Text',
  };

  it('renders without errors', () => {
    render(<Pill {...defaultProps} />);
  });

  it('renders the pill element with correct text', () => {
    const { getByText } = render(<Pill {...defaultProps} />);
    const PillElement = getByText('Pill Text');

    expect(PillElement).toBeInTheDocument();
  });

});