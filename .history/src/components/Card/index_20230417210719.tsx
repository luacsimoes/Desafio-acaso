import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  let message = '';
  if (feedItem?.type === 'want_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e pode ajudar em assuntos que você quer ajuda.`;
  }
  return (
    <View>
      <View>
        <Image
          source={{ uri: feedItem?.data?.profile_picture }}
          style={{ width: 50, height: 50 }}
        />
        {message !== '' && <Text>{message}</Text>}
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
