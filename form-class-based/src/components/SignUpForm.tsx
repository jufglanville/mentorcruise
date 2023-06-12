import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import { Input as InputClass } from '../utilities/inputs';
import { InputType } from '../types';

interface State {
  formSubmitted: boolean;
  inputs: InputType[];
  error: boolean;
}

interface SubmissionData {
  [key: string]: string;
}

class SignUpForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formSubmitted: false,
      error: false,
      inputs: [
        new InputClass('text', 'First Name'),
        new InputClass('text', 'Last Name'),
        new InputClass('email', 'Email Address'),
        new InputClass('password', 'Password'),
      ],
    };
  }

  handleChange = (id: string, value: string) => {
    const inputs = this.state.inputs.map((input: InputType) => {
      if (input.id === id) {
        input.value = value;
        input.isValid = input.validation.valid(value);
      }
      return input;
    });

    this.setState({ inputs });
  };

  handleSubmit = () => {
    this.setState({ formSubmitted: true });
    let err = false;
    const data: SubmissionData = {};
    this.state.inputs.forEach((input: InputType) => {
      if (input.isValid && input.value) {
        data[input.id] = input.value;
      } else {
        err = true;
        this.setState({ error: true });
      }
    });
    if (!err) {
      // Handle form submission
      const json = JSON.stringify(data);
      console.log(json);
    }
  };

  render() {
    return (
      <Form>
        {this.state.inputs.map((input: InputType) => (
          <Input
            key={input.id}
            formSubmitted={this.state.formSubmitted}
            onChange={(id, value) => this.handleChange(id, value)}
            {...input}
          />
        ))}
        <Button onClick={this.handleSubmit}>Claim your free trial</Button>
        <Terms>
          By clicking the button, you are agreeing to our{' '}
          <TermsLink href="#">Terms and Services</TermsLink>
        </Terms>
      </Form>
    );
  }
}

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
  padding: 1.5rem 2rem 2rem 2rem;
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const Terms = styled.p`
  font-size: 0.6rem;
  text-align: center;
  color: var(--grayish-blue);
`;

const TermsLink = styled.a`
  color: var(--red);
  text-decoration: none;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;

export default SignUpForm;
