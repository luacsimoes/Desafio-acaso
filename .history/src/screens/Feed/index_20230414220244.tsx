import React from 'react';
import { Text } from 'react-native';
import { Container, Header, AcasoLogo } from './styles';

const Feed = () => {
  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
      </Header>
    </Container>
  );
};

export default Feed;
