import React, { useContext } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import { View, Text, Image } from 'react-native';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  const { feed } = useContext(FeedContext);
  return (
    <View>
      <View>
        <Image source={{ uri: feedItem.data.microverse.profile_picture }} />
        <Text>{feedItem.data.microverse.name}</Text>
      </View>
      <View>
        <Text>{feedItem.type}</Text>
        <Text>{createdAt}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Card;
