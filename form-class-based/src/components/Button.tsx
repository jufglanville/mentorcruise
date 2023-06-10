import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}

interface State {
  clicked: boolean;
}

class Button extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    const { active, children, onClick } = this.props;
    return (
      <Btn onClick={onClick} disabled={!active}>
        {children}
      </Btn>
    );
  }
}

const Btn = styled.button`
  background-color: var(--green);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
