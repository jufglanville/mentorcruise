import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

import TipCalculator from './components/TipCalculator';

const App = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <TipCalculator />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--light-grayish-cyan);
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 450px) {
    padding: 0;
  }
`;

export default App;
