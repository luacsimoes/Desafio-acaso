import React, { useContext } from 'react';
import { Text } from 'react-native';
import { AuthContext } from '@/context/Auth';
import { Container, Header, AcasoLogo } from './styles';

const Feed = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
      </Header>
    </Container>
  );
};

export default Feed;
