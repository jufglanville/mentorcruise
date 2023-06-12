import React from 'react';
import styled from 'styled-components';

class SignUpInfo extends React.Component {
  render() {
    return (
      <Container>
        <Heading>Learn to code by watching others</Heading>
        <Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default SignUpInfo;
