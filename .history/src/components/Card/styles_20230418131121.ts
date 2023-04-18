import styled from 'styled-components/native';
import { FeedType } from '@/context/Feed';
import LinearGradient from 'react-native-linear-gradient';

interface CardProps {
  feedItem: FeedType;
}
export const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  background-color: linear-gradient(271.62deg, #ae1448 0%, #e93f78 98.53%);
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

export const MenuImage = styled.Image`
  right: 12px;
`;

export const Footer = styled(LinearGradient)<CardProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  flex: 1;
  margin-top: 8px;
  border-radius: 8px;
  ${({ feedItem }) => {
    let colors = ['#ccc', '#ddd'];
    if (feedItem?.type === 'want_help') {
      colors = ['#AE1448', '#E93F78'];
    } else if (feedItem?.type === 'can_help') {
      colors = ['purple', 'violet'];
    } else if (feedItem?.type === 'new_mentoring_available') {
      colors = ['green', 'lightgreen'];
    }
    return `background-color: ${colors[0]}; colors: ${colors.join(', ')};`;
  }};
`;

export const DateText = styled.Text`
  color: #aeafb7;
`;
