import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';
import React from 'react';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('Renders a Button with the correct text', () => {
    render(
      <Button selected={true} onClick={mockOnClick}>
        Click Me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toBeInTheDocument();
  });

  it('Allows us to click the button', () => {
    render(
      <Button selected={true} onClick={mockOnClick}>
        Click Me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('Prevents button being clicked if disabled', () => {
    render(
      <Button selected={true} onClick={mockOnClick} disabled={true}>
        Click Me
      </Button>
    );
    const button = screen.getByText(/click me/i);
    expect(button).toBeDisabled();
  });

  // it('Applies the correct styles when selected', () => {
  //   render(
  //     <Button selected={true} onClick={mockOnClick}>
  //       Click Me
  //     </Button>
  //   );
  //   const button = screen.getByText(/click me/i);
  //   expect(button).toHaveStyle(`
  //     background-color: hsl(172, 67%, 45%);
  //     color: hsl(183, 100%, 15%);
  //   `);
  // });

  // it('Applies the correct styles when not selected', () => {
  //   render(
  //     <Button onClick={mockOnClick}>
  //       Click Me
  //     </Button>
  //   );
  //   const button = screen.getByText(/click me/i);
  //   expect(button).toHaveStyle(`
  //     background-color: hsl(183, 100%, 15%);
  //     color: hsl(0, 0%, 100%);
  //   `);
  // });

});
