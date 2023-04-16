import React, { useContext } from 'react';
import { FeedType } from '@/context/Feed';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface CardProps {
  name: string;
  profilePicture: ImageSourcePropType;
  message: string;
  createdAt: string;
}

const Card: React.FC<CardProps> = () => {
  const { feed } = useContext<FeedType>();
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
  },
  createdAt: {
    fontSize: 12,
    color: '#666',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

export default Card;
