import styled from 'styled-components/native';
import { FeedType } from '@/context/Feed';

interface CardProps {
  feedItem: FeedType;
}
export const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: #1e1f2f;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

export const Header = styled.View`
  display: flex;
  padding: 8px;
  flex: 1;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 16px;
  border: 4px;
  border-color: pink;
`;

export const MessageContainer = styled.View`
  flex: 1;
  border-radius: 4px;
`;

export const Message = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
  flex-wrap: wrap;
`;

export const FooterText = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
`;

export const MenuImage = styled.Image``;

export const Content = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 8px;
`;

export const Footer = styled.View<{ feedItem: FeedType }>`
  display: flex;
  padding: 8px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.Text`
  color: #aeafb7;
  margin-bottom: 8px;
  font-family: 'Raleway-Regular';
`;

export const FlagImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;
