import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LinearGradient from 'react-native-linear-gradient';
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
  FooterText,
} from './styles';

interface CardProps {
  feedItem: FeedType;
  colors: string[];
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  dayjs.extend(relativeTime);
  const date = dayjs(feedItem?.created_at).locale('pt-br').fromNow();
  let message = '';
  let Footer = '';
  let color: string[] = [] as string[];
  if (feedItem?.type === 'can_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e pode ajudar em assuntos que você quer ajuda.`;
    color = ['#4C227C', '#7F3CCA'];
    Footer = `Enviar mensagem`;
  } else if (feedItem?.type === 'want_help') {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} entrou recentemente e quer ajuda em assuntos que você pode ajudar.`;
    color = ['#AE1448', '#E93F78'];
    Footer = `Enviar mensagem`;
  } else if (
    feedItem?.type === 'new_mentoring_available' &&
    feedItem?.data?.has_mentoring_available
  ) {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} abriu novos horários de mentoria.`;
    color = ['#076926', '#0EC948'];
    Footer = `Ver detalhes da mentoria`;
  } else if (
    feedItem?.type === 'new_mentoring_available' &&
    !feedItem?.data?.has_mentoring_available
  ) {
    message = `${feedItem?.data?.first_name} ${feedItem?.data?.last_name} esteve disponível recentemente para realizar mentorias.`;
    color = ['#076926', '#0EC948'];
    Footer = `Ver detalhes da mentoria`;
  } else {
    color = ['#8D8E99', '#343440'];
    Footer = `Veja o pedido`;
  }
  return (
    <Container>
      <Header>
        <ProfilePicture source={{ uri: feedItem?.data?.profile_picture }} />
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
        <MenuImage
          source={require('./images/menu.png')}
          style={{ marginLeft: 16 }}
        />
      </Header>
      <Content>
        <DateText>{date}</DateText>
      </Content>
      <LinearGradient colors={color}>
        <Footer feedItem={feedItem}>
          <FooterText>{Footer}</FooterText>
        </Footer>
      </LinearGradient>
    </Container>
  );
};

export default Card;
