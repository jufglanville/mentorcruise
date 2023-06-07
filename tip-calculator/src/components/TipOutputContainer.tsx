import React from 'react';
import styled from 'styled-components';
import { TipOutputType } from '../types';
import Button from './Button';
import AmountOutput from './AmountOutput';

interface Props {
  data: TipOutputType;
  onReset: () => void;
}

const TipOutputContainer = ({ data, onReset: handleReset }: Props) => {
  return (
    <Container>
      <AmountOutput
        label="Tip Amount"
        value={data.tipAmount}
        currency={data.currency}
      />
      <AmountOutput label="Total" value={data.total} currency={data.currency} />
      <Button onClick={handleReset} selected={true} disabled={!data.active}>
        RESET
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--dark-cyan);
  display: grid;
  grid-template-rows: repeat(2, 1fr) 2fr;
  gap: 1rem;
  align-items: flex-end;
  padding: 2.5rem;
  border-radius: 1rem;

  @media (max-width: 450px) {
    padding: 1.5rem;
  }
`;

export default TipOutputContainer;
