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
`;

export const Header = styled.View`
  display: flex;
  padding: 8px;
  flex: 1;
  flex-direction: row;
  max-width: 100%;
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
  width: 250px;
  border-radius: 4px;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
`;

export const FooterText = styled.Text`
  color: white;
  flex-wrap: wrap;
`;

export const MenuImage = styled.Image`
  right: 12px;
`;

export const Content = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 8px;
`;

export const Footer = styled.View<{ feedItem: FeedType }>`
  display: flex;
  align-items: center;
  padding: 8px;
  flex: 1;
  flex-direction: row;
`;

export const DateText = styled.Text`
  color: #aeafb7;
  margin-bottom: 8px;
`;

export const FlagImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;
