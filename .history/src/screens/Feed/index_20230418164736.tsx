import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { data, profilePicture, fetchNextPage, hasNextPage } =
    useContext(FeedContext);
  const renderItem = ({ item }: { item: FeedType }) => <Card feedItem={item} />;
  const navigation = useNavigation();
  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen', { email });
  };

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        <TouchableOpacity onPress={handleProfilePress}>
          {profilePicture !== '' ? (
            <ProfilePicture source={{ uri: profilePicture }} />
          ) : (
            <ProfilePicture source={require('./images/defaultimage.jpg')} />
          )}
        </TouchableOpacity>
      </Header>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
          onEndReached={() => {
            fetchNextPage?.();
          }}
          onEndReachedThreshold={0.1}
          style={{ flexGrow: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </Container>
  );
};

export default Feed;
