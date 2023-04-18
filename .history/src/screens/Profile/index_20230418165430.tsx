import React, { useState, useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { AuthContext } from '@/context/Auth';
import Button from '@/components/Button';
import { FeedContext } from '@/context/Feed';
import axios from 'axios';
import {
  Container,
  ProfilePicture,
  Header,
  Main,
  FirstName,
  LastName,
  ActivityTime,
  Sair,
  Icon,
  StrongText,
} from './styles';

const ProfileScreen = () => {
  const { signOut, userInfo } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState<string>('');
  const { data, profilePicture, fetchNextPage, hasNextPage } =
    useContext(FeedContext);
  useEffect(() => {
    async function fetchProfilePicture() {
      try {
        const response = await axios.get(
          `https://api.staging.aca.so/user/profile/${userInfo?.user?.id}`,
        );
        setProfilePicture(response.data.profile_picture);
      } catch (error: any) {
        if (error.response.status === 404) {
          setProfilePicture('');
        } else {
          console.error(error);
        }
      }
    }
    fetchProfilePicture();
  }, [userInfo]);

  return (
    <Container>
      <Header>
        <Image source={require('./images/adorno.png')} />
        {profilePicture !== '' ? (
          <ProfilePicture source={{ uri: profilePicture }} />
        ) : (
          <ProfilePicture source={require('./images/defaultimage.jpg')} />
        )}
        <Icon source={require('./images/icon.png')} />
      </Header>
      <Main>
        <FirstName numberOfLines={1} ellipsizeMode="tail">
          {userInfo?.user?.first_name}
        </FirstName>
        <LastName numberOfLines={1} ellipsizeMode="tail">
          {userInfo?.user?.last_name}
        </LastName>
        <ActivityTime>
          Ativo há <StrongText>0 minutos</StrongText>
        </ActivityTime>
        <Button onPress={signOut} width={226} height={50} isWhite>
          <Sair>Sair de aca.so</Sair>
        </Button>
      </Main>
    </Container>
  );
};

export default ProfileScreen;
