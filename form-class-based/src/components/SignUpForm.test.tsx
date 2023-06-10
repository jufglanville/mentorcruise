import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm from './SignUpForm';

describe('SignUpForm component', () => {
  it('renders without errors', () => {
    render(<SignUpForm />);
  });

  it('renders input fields and a button', () => {
    const { getByText, getByPlaceholderText } = render(<SignUpForm />);

    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email Address');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Claim your free trial');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    const { getByPlaceholderText } = render(<SignUpForm />);

    const firstNameInput = getByPlaceholderText('First Name');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(firstNameInput).toHaveValue('John');
  });

  // Tests needed for For Submission, Validation, and Error Messages
});
