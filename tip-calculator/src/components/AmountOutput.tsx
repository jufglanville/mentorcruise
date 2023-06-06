import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  value: number;
  currency?: string;
}

const AmountOutput = ({ label, value, currency }: Props) => {
  return (
    <Container>
      <LabelContainer>
        <LabelPrimary>{label}</LabelPrimary>
        <LabelSecondary>/ person</LabelSecondary>
      </LabelContainer>
      <Amount>
        {currency}
        {value}
      </Amount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelPrimary = styled.p`
  font-size: 16px;
  color: var(--white);
  font-weight: 700;
`;

const LabelSecondary = styled.p`
  font-size: 14px;
  color: var(--grayish-cyan);
  font-weight: 700;
`;

const Amount = styled.p`
  font-size: 48px;
  color: var(--primary);
  font-weight: 700;
`;

export default AmountOutput;
