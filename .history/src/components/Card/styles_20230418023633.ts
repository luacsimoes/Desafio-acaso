import React from 'react';
import { FeedType, FeedContext } from '@/context/Feed';
import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // import the relativeTime plugin
import 'dayjs/locale/pt-br';
import styled from 'styled-components/native';

dayjs.extend(relativeTime);

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  let borderColor = '';
  let footerBackground = '';

  if (feedItem?.type === 'can_help') {
    borderColor = '#7F3CCA';
  } else if (feedItem?.type === 'want_help') {
    borderColor = '#E93F78';
    footerBackground = '#E93F78';
  } else if (feedItem?.type === 'new_mentoring_available' && feedItem?.data?.has_mentoring_available) {
    footerBackground = 'linear-gradient(271.62deg, #076926 0%, #0EC948 98.53%)';
  }

  const Container = styled.View`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    padding: 8px;
    background: ${feedItem?.type === 'new_mentoring_available' ? footerBackground : '#1e1f2f'};
  `;

  const Header = styled.View`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    margin-bottom: 16px;
  `;

  const ProfilePicture = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 16px;
    border: 4px;
    border-color: ${borderColor || 'pink'};
  `;

  const MessageContainer = styled.View`
    width: 250px;
    background-color: orange;
    border-radius: 4px;
  `;

  const Message = styled.Text`
    color: white;
    flex-wrap: wrap;
  `;

  const MenuImage = styled.Image`
    right: 12px;
  `;

  const Content = styled.View`
    display: flex;
    justify-content: center;
  `;

  const Footer = styled.View`
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: ${footerBackground || 'green'};
    flex: 1;
    margin-top: 8px;
  `;

  const DateText = styled.Text`
    color: #aeafb7;
  `;