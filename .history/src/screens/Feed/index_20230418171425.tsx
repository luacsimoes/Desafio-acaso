import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { propsStack } from '@/routes/Stack/Models';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { data, profilePicture, fetchNextPage } = useContext(FeedContext);
  const renderItem = ({ item }: { item: FeedType }) => <Card feedItem={item} />;
  const navigation = useNavigation<propsStack>();
  const handleProfilePress = () => {
    navigation.navigate('ProfileScreen');
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
      <View style={{ backgroundColor: 'purple' }}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
          onEndReached={() => {
            fetchNextPage?.();
          }}
          onEndReachedThreshold={0.1}
          style={{ flexGrow: 1, backgroundColor: 'orange', flexShrink: 0 }}
          contentContainerStyle={{
            flexShrink: 0,
            backgroundColor: 'blue',
            flexGrow: 1,
          }}
        />
      </View>
    </Container>
  );
};

export default Feed;
