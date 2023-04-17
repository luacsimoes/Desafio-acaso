import React, { useContext } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { data, profilePicture } = useContext(FeedContext);

  const renderItem = ({ item }: { item: FeedType }) => <Card feedItem={item} />;

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
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

export default Feed;
