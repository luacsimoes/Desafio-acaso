import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import axios from 'axios';
import { AuthContext } from '@/context/Auth';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FeedType = {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  data: {
    id: string;
    name: string;
    subscribed: boolean;
    initial_hour: string;
    microverse: {
      id: string;
      name: string;
      profile_picture: string;
      primary_color: string;
      secondary_color: string;
      highlight_color: string;
    };
  };
};

type FeedContextValue = {
  profilePicture: string;
  feed: FeedType[];
  fetchProfilePicture: () => void;
  fetchFeed: () => void;
};

const FeedProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [feed, setFeed] = useState<FeedType[]>([]);
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();

  const fetchProfilePicture = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      setProfilePicture(response.data.profile_picture);
    } catch (error: any) {
      if (error.response?.status === 404) {
        console.log('oi');
        setProfilePicture('');
      } else {
        console.error('oi');
      }
    }
  }, [userInfo]);

  const fetchFeed = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      setFeed(response.data);
      AsyncStorage.setItem('feed', JSON.stringify(feed));
    } catch (error: any) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar feed',
      });
    }
  }, [userInfo, feed]);

  useEffect(() => {
    if (userInfo) {
      fetchFeed();
      fetchProfilePicture();
    }
  }, [fetchProfilePicture, fetchFeed, userInfo]);

  const contextValue = useMemo(() => {
    return {
      profilePicture,
      feed,
      fetchProfilePicture,
      fetchFeed,
    };
  }, [profilePicture, feed, fetchProfilePicture, fetchFeed]);

  return (
    <FeedProvider.Provider value={contextValue}>{children}</FeedProvider.Provider.Provider>
  );
};

export default FeedProvider;
