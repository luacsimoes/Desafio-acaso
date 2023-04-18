import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  return (
    <View>
      <View>
        <Image source={{ uri: feedItem?.data?.microverse?.profile_picture }} />
        <Text>{feedItem?.name}</Text>
      </View>
      <View>
        <Text>{feedItem?.type}</Text>
        <Text>{feedItem?.created_at}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Card;
