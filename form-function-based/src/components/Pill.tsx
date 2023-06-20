import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Pill = ({ children }: Props) => {
  return <PillElement>{children}</PillElement>;
};

const PillElement = styled.div`
  background-color: var(--blue);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 0.8rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  letter-spacing: 0.05rem;
  margin-bottom: 1rem;
`;

export default Pill;
