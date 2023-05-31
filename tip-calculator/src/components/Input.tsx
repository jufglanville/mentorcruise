import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  icon: string;
  label: string;
  type: string;
  value: string | number;
  placeholder?: string;
  error?: string;
  onChange: (value: string | number) => void;
}

const Input = ({ label, icon, type, value, error, onChange }: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <>
      <Heading>{label}</Heading>
      <Container>
        <img src={icon} alt="icon" />
        <InputElement
          data-testid="input"
          type={type}
          value={inputValue}
          onChange={handleChange}
        />
      </Container>
    </>
  );
};

const Heading = styled.h2`
  font-size: 1.5rem;
`;

const Container = styled.div``;

const InputElement = styled.input`
  border: 1px solid #ccc;
`;

export default Input;
