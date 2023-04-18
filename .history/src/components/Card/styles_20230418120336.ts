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

export const Content = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 8px;
`;

export const Footer = styled.View<{ feedItem?: FeedType }>`
  display: flex;
  align-items: center;
  padding: 8px;
  flex: 1;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${(props) => {
    if (typeof props.feedItem !== 'undefined') {
      if (props.feedItem.type === 'want_help') {
        return `linear-gradient(271.62deg, #AE1448 0%, #E93F78 98.53%)`;
      }
      if (props.feedItem.type === 'can_help') {
        return `purple`;
      }
      if (props.feedItem.type === 'new_mentoring_available') {
        return `green`;
      }

      return 'gray';
    }
  }};
`;

export const DateText = styled.Text`
  color: #aeafb7;
`;
