import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpInfo from './SignUpInfo';

describe('SignUpInfo component', () => {
  it('renders without errors', () => {
    render(<SignUpInfo />);
  });

  it('renders the correct content', () => {
    const { getByRole, getByText } = render(<SignUpInfo />);

    const heading = getByRole('heading');
    const content = getByText('See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.');

    expect(heading).toHaveTextContent('Learn to code by watching others');
    expect(content).toBeInTheDocument();
  });
});