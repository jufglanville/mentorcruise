import React from 'react';
import styled from 'styled-components';

type TranscientProps = {
  $selected: boolean;
  disabled: boolean;
};

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  onClick,
  selected = false,
  disabled = false,
}: Props) => {
  return (
    <ButtonElement $selected={selected} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<TranscientProps>`
  background-color: ${({ $selected }) =>
    $selected ? 'var(--primary)' : 'var(--dark-cyan)'};
  color: ${({ $selected }) =>
    $selected ? 'var(--dark-cyan)' : 'var(--white)'};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    color: var(--dark-cyan);
    background-color: var(--light-grayish-cyan);
  }
  &:disabled {
    background-color: var(--primary);
    color: var(--dark-cyan);
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
