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
        <Image source={{ uri: feed?.data.microverse.profile_picture }} />
        <Text>{feed?.data.microverse.name}</Text>
      </View>
      <View>
        <Text>{feed?.type}</Text>
        <Text>{feed?.created_at}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Card;
