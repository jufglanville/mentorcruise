import React from 'react';
import styled from 'styled-components';
import { UnionType } from '../types';
import Button from './Button';
import AmountOutput from './AmountOutput';

interface Props {
  data: UnionType[];
  onChange: (id: string, value: string | number) => void;
}

const TipOutputContainer = ({ data, onChange }: Props) => {
  const handleClick = () => {
    console.log('reset');
  };

  return (
    <Container>
      <AmountOutput label="Tip Amount" value={0.0} currency={'$'} />
      <AmountOutput label="Total" value={20.23} currency={'$'} />
      <Button onClick={handleClick} selected={true}>
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
