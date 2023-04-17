import React, { useContext, useState, useMemo } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { data, profilePicture } = useContext(FeedContext);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

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
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={allItemsLoaded ? undefined : loadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

export default Feed;
