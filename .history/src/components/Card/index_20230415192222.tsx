import React, { useContext } from 'react';
import { FeedContext, FeedType } from '@/context/Feed';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface CardProps {
  feedItem: FeedType;
}

const Card: React.FC<CardProps> = ({ feedItem }) => {
  const { profilePicture, feed } = useContext(FeedContext);
  return (
    <View>
      <View>
        <Image source={{ uri: feed?.data.microverse.profile_picture }} />
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{message}</Text>
        <Text>{createdAt}</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};
