import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formInputs, TipOutput } from '../data/formInput';
import TipInputContainer from './TipInputContainer';
import TipOutputContainer from './TipOutputContainer';
import { FormInputTypes } from '../types';

const TipCalculator = () => {
  const [tipInputData, setTipInputData] = useState(formInputs);
  const [tipOutputData, setTipOutputData] = useState(new TipOutput());

  const handleChange = (id: string, value: string | number) => {
    const updatedTipInputData = tipInputData.map((item) =>
      item.id === id ? { ...item, value } : item
    );
    updateTipOutput(updatedTipInputData);
    setTipInputData(updatedTipInputData);
  };

  const handleReset = () => {
    const resetTipInput = tipInputData.map((item) => ({
      ...item,
      value: 0,
    }));
    updateTipOutput(resetTipInput);
    setTipInputData(resetTipInput);
  };

  const updateTipOutput = (updatedTipInputData: FormInputTypes[]) => {
    const [bill, tip, numberOfPeople] = updatedTipInputData.map(
      (item) => item.value as number
    );
    const calculatedTipOutput = new TipOutput();
    calculatedTipOutput.calculateTip(bill, tip, numberOfPeople);
    setTipOutputData(calculatedTipOutput);
  };

  return (
    <Container data-testid="tip-calculator">
      <TipInputContainer data={tipInputData} onChange={handleChange} />
      <TipOutputContainer tip={tipOutputData} onReset={handleReset} />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  max-width: 1000px;
  margin: 5rem auto;

  @media (max-width: 945px) {
    padding: 1.5rem;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export default TipCalculator;
