import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  icon?: string;
  label?: string;
  type: 'float' | 'integer' | 'string';
  value: string | number;
  error?: string;
  placeholder?: string;
  onChange: (value: string | number) => void;
}

const Input = ({
  label,
  icon,
  type,
  value,
  error,
  placeholder,
  onChange,
}: Props) => {
  const [inputValue, setInputValue] = useState(value !== 0 ? value : '');
  const [inputError, setInputError] = useState(false);

  const validator = {
    integer: /^(?!0)\d*$|^$/,
    float: /^0(\.\d{0,2})?$|^[1-9]\d*(\.\d{0,2})?$|^$/,
    string: /^[A-Za-z]*$|^$/,
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validator[type].test(value)) {
      setInputValue(value);
      onChange(value);
      setInputError((error && value === '') as boolean);
    }
  };

  return (
    <Container>
      <LabelContainer>
        {label && <Heading>{label}</Heading>}
        {inputError && <ErrorText>{error}</ErrorText>}
      </LabelContainer>
      <InputContainer>
        {icon && <Icon src={icon} alt="icon" />}
        <InputElement
          inputError={inputError}
          data-testid="input"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder || (type === 'string' ? '' : '0')}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 10px 0;
`;

const Heading = styled.p`
  font-size: 16px;
  color: var(--dark-grayish-cyan);
  font-weight: 700;
`;

const ErrorText = styled(Heading)`
  color: var(--error);
`;

const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(0, -50%);
`;

const InputElement = styled.input<{ inputError?: boolean }>`
  padding: 5px 10px;
  text-align: right;
  background-color: transparent;
  font-size: 24px;
  border: 2px solid;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  border-color: ${({ inputError }) =>
    inputError ? 'var(--error)' : 'var(--very-light-grayish-cyan)'};
  background-color: var(--very-light-grayish-cyan);
  &:focus {
    border-color: ${({ inputError }) =>
      inputError ? 'var(--error)' : 'var(--primary)'};
  }
  &::placeholder {
    color: var(--grayish-cyan);
  }
`;

export default Input;
