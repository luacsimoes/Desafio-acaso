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
import { useQuery } from 'react-query';

export type FeedItemType = {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  data: {
    id: string;
    name: string;
    subscribed: true;
    initial_hour: string;
    microverse: {
      id: string;
      name: string;
      profile_picture: string;
      primary_color: string;
      secondary_color: string;
      highlight_color: string;
    };
    title: string;
    description: string;
  };
  has_next: boolean;
};

export type FeedType = {
  has_next: boolean;
  data: FeedItemType[];
};

export type FeedContextValue = {
  profilePicture: string;
  feed: FeedType | undefined;
  fetchProfilePicture: () => void;
  fetchFeed: () => void;
  refetchFeed: () => void;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
  feed: undefined,
  fetchProfilePicture: () => {},
  fetchFeed: () => {},
  refetchFeed: () => {},
});

const FeedProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState<string>('');
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

  const { data: feed = undefined, refetch: refetchFeed } = useQuery<FeedType>(
    'feed',
    async () => {
      const response = await axios.get(`${BASE_URL}/feed`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      AsyncStorage.setItem('feed', JSON.stringify(response.data));
      return response.data;
    },
    {
      enabled: !!userInfo,
      refetchOnWindowFocus: false,
      onError: (error: any) => {
        console.error(error);
        Toast.show({
          type: 'error',
          text1: 'Erro ao buscar feed',
        });
      },
    },
  );

  const fetchFeed = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      AsyncStorage.setItem('feed', JSON.stringify(response.data));
    } catch (error: any) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar feed',
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      fetchProfilePicture();
    }
  }, [fetchProfilePicture, userInfo]);

  const contextValue = useMemo(() => {
    return {
      profilePicture,
      feed,
      fetchProfilePicture,
      refetchFeed,
      fetchFeed,
    };
  }, [profilePicture, feed, fetchProfilePicture, fetchFeed, refetchFeed]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
