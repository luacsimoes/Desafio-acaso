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
  background-color: orange;
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

  ${(props) =>
    typeof props.feedItem !== 'undefined' &&
    css`
      background: linear-gradient(
        271.62deg,
        ${props.feedItem === 'want_help' ? '#AE1448' : ''}
          ${props.feedItem === 'want_help' || props.feedItem === 'can_help'
            ? ', '
            : ''}
          ${props.feedItem === 'can_help' ? '#4C227C' : ''}
          ${props.feedItem === 'can_help' ||
          props.feedItem === 'new_mentoring_available'
            ? ', '
            : ''}
          ${props.feedItem === 'new_mentoring_available' ? '#076926' : ''} 0%,
        ${props.feedItem === 'want_help' ? '#E93F78' : ''}
          ${props.feedItem === 'can_help' ? '#7F3CCA' : ''}
          ${props.feedItem === 'new_mentoring_available' ? '#0EC948' : ''}
          98.53%
      );
    `}
`;

export const DateText = styled.Text`
  color: #aeafb7;
`;
