import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

import { InputType, TipsType } from '../types';

const customTipObj: InputType = {
  type: 'Input',
  id: 'id_1',
  value: 0,
  valueType: 'integer',
  placeholder: 'Custom',
  onChange: (id: string, value: string | number) => {},
};

const TipAmountContainer = ({
  id,
  name,
  valueOptions,
  custom,
  onChange,
}: TipsType) => {
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  const handleChange = (value: number) => {
    setTip(value);
    setCustomTip(0);
  };

  const handleCustomChange = (id: string, value: string) => {
    const parsedValue = parseInt(value) ? parseInt(value) : 0;
    setCustomTip(parsedValue);
    setTip(parsedValue);
  };

  useEffect(() => {
    onChange(id, tip);
  }, [tip]);

  return (
    <Container>
      <Heading>{name}</Heading>
      {valueOptions.map((valueOption) => (
        <Button
          key={valueOption}
          selected={tip === valueOption}
          onClick={() => handleChange(valueOption)}
        >
          {valueOption}%
        </Button>
      ))}
      {custom && (
        <Input
          {...customTipObj}
          value={customTip}
          onChange={(id, value) => handleCustomChange(id, value as string)}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Heading = styled.p`
  grid-column: 1 / -1;
  font-size: 16px;
  color: var(--dark-grayish-cyan);
  font-weight: 700;
`;

export default TipAmountContainer;
