import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import { parse } from '@babel/core';

interface Props {
  onChange: (value: number) => void;
}

const TipAmountContainer = ({ onChange }: Props) => {
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  const handleChange = (value: number) => {
    setTip(value);
    setCustomTip(0);
  };

  const handleCustomChange = (value: string) => {
    const parsedValue = parseInt(value) ? parseInt(value) : 0;
    setCustomTip(parsedValue);
    setTip(parsedValue);
  };

  useEffect(() => {
    onChange(tip);
  }, [tip]);

  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <Container>
      <Heading>Select Tip %</Heading>
      {tipOptions.map((tipOption) => (
        <Button
          key={tipOption}
          selected={tip === tipOption}
          onClick={() => handleChange(tipOption)}
        >
          {tipOption}%
        </Button>
      ))}
      <Input
        type="integar"
        value={customTip}
        onChange={(val) => handleCustomChange(val as string)}
        placeholder="Custom"
      />
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
