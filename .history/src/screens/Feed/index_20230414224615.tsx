import React, { useContext, useState } from 'react';
import { Text, Image } from 'react-native';
import { AuthContext } from '@/context/Auth';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = ({ userPicture }: { userPicture: string }) => {
  const [picture, setPicture] = useState<string>(userPicture);

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        <ProfilePicture source={{ uri: picture }} />
      </Header>
    </Container>
  );
};

export default Feed;
