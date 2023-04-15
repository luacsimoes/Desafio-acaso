import React, { useContext, useState } from 'react';
import { Text, Image } from 'react-native';
import { FeedContext } from '@/context/Feed';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { userPicture } = useContext(FeedContext);
  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        {picture !== '' ? (
          <ProfilePicture source={{ uri: userPicture }} />
        ) : (
          <ProfilePicture source={require('./images/defaultimage.jpg')} />
        )}
      </Header>
    </Container>
  );
};

export default Feed;
