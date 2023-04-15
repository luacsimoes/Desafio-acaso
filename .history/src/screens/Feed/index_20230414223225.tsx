import React, { useContext } from 'react';
import { Text, Image } from 'react-native';
import { AuthContext } from '@/context/Auth';
import { Container, Header, AcasoLogo } from './styles';

type ProfileScreenProps = {
  profile_picture: string;
};

const Feed<ProfileScreenProps> = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <Container>
      <Header>
        <AcasoLogo source={{ uri: userInfo?.user?.profile_picture }} />
        <Image />
      </Header>
    </Container>
  );
};

export default Feed;
