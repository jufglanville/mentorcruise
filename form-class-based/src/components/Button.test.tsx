import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders button text correctly', () => {
    const { getByText } = render(<Button active={true} onClick={() => {}}>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button active={true} onClick={handleClick}>Click me</Button>);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when active is false', () => {
    const { getByText } = render(<Button active={false} onClick={() => {}}>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });
});
