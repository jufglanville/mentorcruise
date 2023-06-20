import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
  background-color: var(--green);
  color: var(--white);
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  letter-spacing: 0.05rem;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
