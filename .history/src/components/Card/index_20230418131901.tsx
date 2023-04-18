import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
import {
  Container,
  Header,
  ProfilePicture,
  MessageContainer,
  Message,
  MenuImage,
  Content,
  Footer,
  DateText,
} from './styles';

interface CardProps {
  feedItem: FeedType;
  colors: {
    primary: string;
    secondary: string;
  };
}

const Card: React.FC<CardProps> = ({ feedItem, colors }) => {
  dayjs.extend(relativeTime);
  const date = dayjs(feedItem?.created_at).locale('pt-br').fromNow();
  let message = '';
  if (feedItem?.type === 'can_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e pode ajudar em assuntos que você quer ajuda.`;
  } else if (feedItem?.type === 'want_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e quer ajuda em assuntos que você pode ajudar.`;
  } else if (
    feedItem?.type === 'new_mentoring_available' &&
    feedItem?.data?.has_mentoring_available
  ) {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} abriu novos horários de mentoria.`;
  } else if (
    feedItem?.type === 'new_mentoring_available' &&
    !feedItem?.data?.has_mentoring_available
  ) {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} esteve disponível recentemente para realizar mentorias.`;
  }

  return (
    <Container colors={colors}>
      <Header>
        <ProfilePicture source={{ uri: feedItem?.data?.profile_picture }} />
        <MessageContainer>
          <Message colors={colors}>{message}</Message>
        </MessageContainer>
        <MenuImage
          source={require('./images/menu.png')}
          style={{ marginLeft: 16 }}
        />
      </Header>
      <Content>
        <DateText colors={colors}>{date}</DateText>
      </Content>
      <Footer feedItem={feedItem} colors={colors}>
        <Text>Footer oi</Text>
      </Footer>
    </Container>
  );
};

export default Card;
