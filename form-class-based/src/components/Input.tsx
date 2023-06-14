import React, { Component } from 'react';
import styled from 'styled-components';
import { InputValidation } from '../types';

import error from '../assets/icon-error.svg';

interface Props {
  formSubmitted: boolean;
  id: string;
  placeholder: string;
  type: string;
  validation: InputValidation;
  value?: any;
  isValid: boolean;
  onChange: (id: string, value: string) => void;
}

class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      formSubmitted,
      id,
      value,
      placeholder,
      type,
      validation,
      isValid,
      onChange,
    } = this.props;
    return (
      <Container>
        <InputElement
          id={id}
          onChange={(e) => onChange(id, e.target.value)}
          type={type}
          placeholder={placeholder}
          $isValid={isValid}
          $formSubmitted={formSubmitted}
          value={value}
          autoComplete="off"
        />
        {!isValid && formSubmitted && (
          <>
            <ErrorIcon src={error} alt="error" />
            <ErrorMessage>{validation.errorMessage}</ErrorMessage>
          </>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
`;

const InputElement = styled.input<{
  $isValid: boolean;
  $formSubmitted: boolean;
}>`
  width: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  border: 1px solid;
  border-color: ${(props) =>
    !props.$isValid && props.$formSubmitted
      ? 'var(--error)'
      : 'var(--grayish-blue)'};
  font-size: 0.8rem;
  font-weight: 600;
  background-color: var(--white);
  color: var(--dark-blue);
  &:focus {
    border-color: ${(props) =>
      !props.$isValid && props.$formSubmitted
        ? 'var(--error)'
        : 'var(--dark-blue)'};
  }
  &::placeholder {
    color: var(--grayish-blue);
  }
`;

const ErrorMessage = styled.p`
  margin: 0.3rem 0;
  font-size: 0.7rem;
  font-style: italic;
  text-align: right;
  color: var(--error);
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 0.8rem;
  right: 0.9rem;
`;
export default Input;
