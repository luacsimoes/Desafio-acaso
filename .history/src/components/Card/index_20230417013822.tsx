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
        <Image
          source={{ uri: feedItem?.data?.profile_picture }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{feedItem?.data?.first_name}</Text>
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
