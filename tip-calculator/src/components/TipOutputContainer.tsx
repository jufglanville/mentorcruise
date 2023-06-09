import React from 'react';
import styled from 'styled-components';
import { TipOutputType } from '../types';
import Button from './Button';
import AmountOutput from './AmountOutput';

interface Props {
  tip: TipOutputType;
  onReset: () => void;
}

const TipOutputContainer = ({ tip, onReset: handleReset }: Props) => {
  return (
    <Container>
      <AmountOutput
        id="tip-amount-output"
        label="Tip Amount"
        value={tip.getTipAmount()}
        currency={tip.getCurrency()}
      />
      <AmountOutput
        id="total-output"
        label="Total"
        value={tip.getTipTotal()}
        currency={tip.getCurrency()}
      />
      <Button onClick={handleReset} selected={true} disabled={!tip.getActive()}>
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
