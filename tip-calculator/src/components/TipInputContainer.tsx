import React, { useState } from 'react';
import Input from './Input';

import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';
import styled from 'styled-components';
import TipAmountContainer from './TipAmountContainer';

const TipInputContainer = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const updateBill = (value: string) => {
    const parsedValue = parseFloat(value) ? parseInt(value) : 0;
    setBill(parsedValue);
  };

  const updatePeople = (value: string) => {
    const parsedValue = parseInt(value) ? parseInt(value) : 0;
    setPeople(parsedValue);
  };

  return (
    <InputContainer>
      <Input
        label="Bill"
        type="float"
        value={bill}
        icon={dollar}
        onChange={(val) => updateBill(val as string)}
      />
      <TipAmountContainer onChange={(val) => setTip(val)} />
      <Input
        label="Number of People"
        type="integar"
        value={people}
        icon={person}
        onChange={(val) => updatePeople(val as string)}
        error="Can't be zero"
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;
`;

export default TipInputContainer;
