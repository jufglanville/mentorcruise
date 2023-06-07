import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TipInputContainer from './TipInputContainer';
import { FormInputTypes } from '../types';

const pricePlanData: FormInputTypes[] = [
  {
    type: 'Input',
    valueType: 'float',
    id: 'id_1',
    name: 'Bill',
    value: 0,
    onChange: jest.fn(),
  },
  {
    type: 'TipAmountContainer',
    id: 'id_2',
    name: 'Select Tip %',
    value: 0,
    custom: true,
    valueOptions: [5, 10, 15, 25, 50],
    onChange: jest.fn(),
  },
  {
    type: 'Input',
    valueType: 'integer',
    id: 'id_3',
    name: 'Number of People',
    value: 0,
    error: "Can't be zero",
    onChange: jest.fn(),
  },
];

describe('TipInputContainer', () => {
  it('renders TipInputContainer without errors', () => {
    render(<TipInputContainer data={[]} onChange={() => {}} />);
  });

  it('renders correct number of child components', () => {
    const { container } = render(<TipInputContainer data={pricePlanData} onChange={() => {}} />);
    const componentElement = container.firstChild as HTMLElement;
    expect(componentElement.childElementCount).toBe(pricePlanData.length);
  });
});
