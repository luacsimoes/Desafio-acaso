import React, { useContext } from 'react';
import { Text, Image } from 'react-native';
import { AuthContext } from '@/context/Auth';
import { Container, Header, AcasoLogo } from './styles';

const Feed = () => {
  const { userInfo } = useContext(AuthContext);
  const [userPicture, setUserPicture] = useState<string>('');

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        <Image source={{ uri: userPicture }} />
      </Header>
    </Container>
  );
};

export default Feed;
