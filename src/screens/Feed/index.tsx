import React, { useContext, useState } from 'react';
import { Text, Image } from 'react-native';
import { FeedContext } from '@/context/Feed';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { profilePicture } = useContext(FeedContext);
  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        {profilePicture !== '' ? (
          <ProfilePicture source={{ uri: profilePicture }} />
        ) : (
          <ProfilePicture source={require('./images/defaultimage.jpg')} />
        )}
      </Header>
    </Container>
  );
};

export default Feed;
