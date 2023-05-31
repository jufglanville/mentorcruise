import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';
import React from 'react';

const mockOnChange = jest.fn();

describe('Input component', () => {
  it('renders an input element with the correct type', () => {
    render(
      <Input
        label="Bill"
        type="number"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('renders an input element with the correct label', () => {
    render(
      <Input
        label="Bill"
        type="number"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Bill');
  });

  it('renders an input element with the correct icon', () => {
    render(
      <Input
        label="Bill"
        type="number"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByRole('img');
    expect(input).toHaveAttribute('src', 'https://via.placeholder.com/20');
  });
});
