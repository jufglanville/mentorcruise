import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';
import { InputValidation } from '../types';

const validation: InputValidation = {
  valid: jest.fn(),
  errorMessage: 'Invalid input',
}

describe('Input component', () => {
  const defaultProps = {
    formSubmitted: false,
    id: 'input-id',
    placeholder: 'Input Placeholder',
    type: 'text',
    validation: validation,
    value: '',
    isValid: true,
    onChange: jest.fn(),
  };

  it('renders without errors', () => {
    render(<Input {...defaultProps} />);
  });

  it('renders the input element with correct props', () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);
    const inputElement = getByPlaceholderText('Input Placeholder');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveValue('');
  });

  it('calls onChange callback when input value changes', () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);
    const inputElement = getByPlaceholderText('Input Placeholder');

    fireEvent.change(inputElement, { target: { value: 'Updated value' } });

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith('input-id', 'Updated value');
  });

  it('displays error message when isValid is false and formSubmitted is true', () => {
    const { getByText } = render(
      <Input {...defaultProps} isValid={false} formSubmitted={true} />
    );
    const errorMessage = getByText('Invalid input');

    expect(errorMessage).toBeInTheDocument();
  });
});
