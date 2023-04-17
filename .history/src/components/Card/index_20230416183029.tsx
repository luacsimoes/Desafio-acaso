import React, { useContext } from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  const { data } = useContext(FeedContext);
  return (
    <View>
      <View>
        <Image source={{ uri: data?.data.microverse.profile_picture }} />
        <Text>{data?.data.microverse.name}</Text>
      </View>
      <View>
        <Text>{data?.type}</Text>
        <Text>{data?.created_at}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default Card;
