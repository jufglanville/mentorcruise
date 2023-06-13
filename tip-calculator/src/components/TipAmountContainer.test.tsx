import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TipAmountContainer from './TipAmountContainer';
import { TipsType } from '../types';

const tipData: TipsType = {
  type: 'TipAmountContainer',
  id: 'id_2',
  name: 'Select Tip %',
  value: 0,
  custom: true,
  valueOptions: [5, 10, 15, 25, 50],
  onChange: jest.fn(),
};

describe('TipAmountContainer', () => {
  it('should call the onChange function when a tip option is selected', () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <TipAmountContainer {...tipData} onChange={onChangeMock} />
    );

    fireEvent.click(getByText('10%'));
    expect(onChangeMock).toHaveBeenCalledWith(tipData.id, 10);
  });

  it('should call the onChange function with the custom tip value when it is entered', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <TipAmountContainer {...tipData} onChange={onChangeMock} />
    );
    const input = getByPlaceholderText('Custom');

    fireEvent.change(input, { target: { value: '20' } });

    expect(onChangeMock).toHaveBeenCalledWith(tipData.id, 20);
  });

  it('should reset the custom tip value and update the tip value when a tip option is selected', () => {
    const onChangeMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TipAmountContainer {...tipData} onChange={onChangeMock} />
    );
    const input = getByPlaceholderText('Custom') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '20' } });
    fireEvent.click(getByText('15%'));

    expect(input.value).toBe('');
    expect(onChangeMock).toHaveBeenCalledWith(tipData.id, 15);
  });
});
