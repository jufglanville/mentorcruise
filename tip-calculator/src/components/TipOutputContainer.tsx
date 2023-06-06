import React from 'react';
import styled from 'styled-components';
import { UnionType } from '../types';
import Button from './Button';
import AmountOutput from './AmountOutput';

interface Props {
  data: {
    tip: number;
    total: number;
    currency: string;
  };
  onReset: () => void;
}

const TipOutputContainer = ({ data, onReset: handleReset }: Props) => {
  return (
    <Container>
      <AmountOutput
        label="Tip Amount"
        value={data.tip}
        currency={data.currency}
      />
      <AmountOutput label="Total" value={data.total} currency={data.currency} />
      <Button onClick={handleReset} selected={true}>
        RESET
      </Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--dark-cyan);
  display: grid;
  gap: 1rem;
`;

export default TipOutputContainer;
