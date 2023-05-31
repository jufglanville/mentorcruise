import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';
import React from 'react';

const mockOnChange = jest.fn();

describe('Input component', () => {
  it('renders an input element', () => {
    render(
      <Input
        label="Bill"
        type="integar"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  it('renders the correct input element label', () => {
    render(
      <Input
        label="Bill"
        type="integar"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Bill');
  });

  it('renders the correct input element icon', () => {
    render(
      <Input
        label="Bill"
        type="integar"
        value={0}
        icon="https://via.placeholder.com/20"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByRole('img');
    expect(input).toHaveAttribute('src', 'https://via.placeholder.com/20');
  });

  describe('when the input type is integar', () => {
    it('calls the onChange callback when a valid input is given', () => {
      const mockOnChange = jest.fn();
      const value = '123';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="integar"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(value);
    });

    it('does not call the onChange callback when an invalid input is given', () => {
      const mockOnChange = jest.fn();
      const value = '12.34';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="integar"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('when the input type is float', () => {
    it('calls the onChange callback when a valid input is given', () => {
      const mockOnChange = jest.fn();
      const value = '12.34';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="float"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(value);
    });

    it('does not call the onChange callback when an invalid input is given', () => {
      const mockOnChange = jest.fn();
      const value = 'abcd';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="float"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  describe('when the input type is string', () => {
    it('calls the onChange callback when a valid input is given', () => {
      const mockOnChange = jest.fn();
      const value = 'TestValue';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="string"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(value);
    });

    it('does not call the onChange callback when an invalid input is given', () => {
      const mockOnChange = jest.fn();
      const value = '1234';

      render(
        <Input
          label="Test Label"
          icon="test-icon.png"
          type="string"
          value=""
          onChange={mockOnChange}
        />
      );

      const inputElement = screen.getByTestId('input');
      fireEvent.change(inputElement, { target: { value } });

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
