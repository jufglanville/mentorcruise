import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  value: number;
}

const AmountOutput = ({ label, value }: Props) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  };

  return (
    <Container>
      <div>
        <Heading>{label}</Heading>
        <Label>/ person</Label>
      </div>
      <TotalAmount>{formatCurrency(value)}</TotalAmount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`;

const Label = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: var(--dark-grayish-cyan);
`;

const TotalAmount = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
`;

export default AmountOutput;
