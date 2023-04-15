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
        <Image source={require('./images/defaultimage.png')} />
      </Header>
    </Container>
  );
};

export default Feed;
