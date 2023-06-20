import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage from './SignUpPage';

describe('SignUpPage component', () => {
  it('renders without errors', () => {
    render(<SignUpPage />);
  });

  it('renders the SignUpInfo text', () => {
    const { getByText } = render(<SignUpPage />);
    const SignUpInfo = getByText('Learn to code by watching others');

    expect(SignUpInfo).toBeInTheDocument();
  });

});