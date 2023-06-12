import React from 'react';
import styled from 'styled-components';

import SignUpInfo from '../components/SignUpInfo';
import SignUpForm from '../components/SignUpForm';

import desktopBg from '../assets/bg-intro-desktop.png';
import mobileBg from '../assets/bg-intro-mobile.png';

interface Props {}

interface State {}

class SignUpPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Container>
          <SignUpInfo />
        </Container>
        <Container>
          <Pill>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </Pill>
          <SignUpForm />
        </Container>
      </Page>
    );
  }
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: var(--red);
  background-image: url(${desktopBg});
  background-position: center;
  background-repeat: repeat;
  @media (max-width: 768px) {
    background-image: url(${mobileBg});
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 50%;
  max-width: 500px;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Pill = styled.div`
  background-color: var(--blue);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 0.8rem;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  letter-spacing: 0.05rem;
  margin-bottom: 1rem;
`;

export default SignUpPage;
