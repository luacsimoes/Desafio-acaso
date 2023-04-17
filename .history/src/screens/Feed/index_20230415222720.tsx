import React, { useContext, useState } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { feed, profilePicture } = useContext(FeedContext);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  const renderCard = ({ item }: { item: FeedType }) => {
    return <Card feedItem={item} />;
  };

  const loadMore = () => {
    // carrega mais cartões aqui
    // use setAllItemsLoaded(true) para parar de carregar mais itens quando todos estiverem carregados
  };

  const renderFooter = () => {
    if (allItemsLoaded) {
      return (
        <Text style={{ textAlign: 'center' }}>
          Não há mais itens para exibir.
        </Text>
      );
    }
    return null;
  };

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
        data={feed?.data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        onEndReached={allItemsLoaded ? undefined : loadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

export default Feed;
