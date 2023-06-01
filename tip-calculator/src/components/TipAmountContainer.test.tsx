import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TipAmountContainer from './TipAmountContainer';

describe('TipAmountContainer', () => {
  it('should call the onChange function when a tip option is selected', () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(<TipAmountContainer onChange={onChangeMock} />);
    
    fireEvent.click(getByText('10%'));
    
    expect(onChangeMock).toHaveBeenCalledWith(10);
  });
  
  it('should call the onChange function with the custom tip value when it is entered', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<TipAmountContainer onChange={onChangeMock} />);
    const input = getByPlaceholderText('Custom');
    
    fireEvent.change(input, { target: { value: '20' } });
    
    expect(onChangeMock).toHaveBeenCalledWith(20);
  });
  
  it('should reset the custom tip value and update the tip value when a tip option is selected', () => {
    const onChangeMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(<TipAmountContainer onChange={onChangeMock} />);
    const input = getByPlaceholderText('Custom') as HTMLInputElement;
    
    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.click(getByText('15%'));
    
    expect(input.value).toBe('');
    expect(onChangeMock).toHaveBeenCalledWith(15);
  });
});
