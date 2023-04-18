import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';
import { Container, Header, ProfilePicture, Message } from './styles';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  let message = '';
  if (feedItem?.type === 'want_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e pode ajudar em assuntos que você quer ajuda.`;
  }
  return (
    <Container>
      <Header>
        <ProfilePicture source={{ uri: feedItem?.data?.profile_picture }} />
        {message !== '' && <Message>{message}</Message>}
      </Header>
      <View>
        <Text>{feedItem?.type}</Text>
        <Text>{feedItem?.created_at}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default Card;
