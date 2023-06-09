import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

import { TipsType } from '../types';
import { InputFactory } from '../data/formInput';

const customTipObj = InputFactory.createInput(
  'input_custom',
  'integer',
  (id, value) => {},
  'Custom'
);

const TipAmountContainer = ({
  id,
  name,
  value,
  valueOptions,
  custom,
  onChange,
}: TipsType) => {
  const [customTip, setCustomTip] = useState(value);

  const handleChange = (value: number) => {
    setCustomTip(0);
    onChange(id, value);
  };

  const handleCustomChange = (value: string) => {
    const parsedValue = parseInt(value) ? parseInt(value) : 0;
    setCustomTip(parsedValue);
    onChange(id, parsedValue);
  };

  useEffect(() => {
    if (value === 0) {
      setCustomTip(0);
    }
  }, [valueOptions, value]);

  return (
    <Container>
      <Heading>{name}</Heading>
      {valueOptions.map((valueOption) => (
        <Button
          key={valueOption}
          selected={value === valueOption}
          onClick={() => handleChange(valueOption)}
        >
          {valueOption}%
        </Button>
      ))}
      {custom && (
        <Input
          {...customTipObj}
          value={valueOptions.includes(value as number) ? 0 : customTip}
          onChange={(id, value) => handleCustomChange(value as string)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Heading = styled.p`
  grid-column: 1 / -1;
  font-size: 16px;
  color: var(--dark-grayish-cyan);
  font-weight: 700;
`;

export default TipAmountContainer;
