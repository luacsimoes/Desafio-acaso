import React, { useContext } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image, FlatList } from 'react-native';
import Card from '@/components/Card';

const Feed = () => {
  const { feed } = useContext(FeedContext);

  const renderCard = ({ item }: { item: FeedType }) => {
    return <Card feedItem={item} />;
  };

  const loadMore = () => {
    // carrega mais cartões aqui
  };

  return (
    <FlatList
      data={feed}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={feed?.has_next ? loadMore : undefined}
    />
  );
};

export default Feed;
