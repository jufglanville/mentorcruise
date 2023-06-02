import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TipInputContainer from './TipInputContainer';

describe('TipInputContainer', () => {
  it('should update the bill value when the bill input is changed', () => {
    const { getByLabelText } = render(<TipInputContainer />);
    const billInput = getByLabelText('Bill') as HTMLInputElement;
    
    fireEvent.change(billInput, { target: { value: '25.5' } });
    
    expect(billInput.value).toBe('25.5');
  });
  
  it('should update the tip value when the TipAmountContainer emits a change event', () => {
    const { getByText } = render(<TipInputContainer />);
    
    fireEvent.click(getByText('15%'));
    
    // Assert that the tip value is updated in some way
  });
  
  it('should update the people value when the people input is changed', () => {
    const { getByLabelText } = render(<TipInputContainer />);
    const peopleInput = getByLabelText('Number of People') as HTMLInputElement;
    
    fireEvent.change(peopleInput, { target: { value: '4' } });
    
    expect(peopleInput.value).toBe('4');
  });
});
