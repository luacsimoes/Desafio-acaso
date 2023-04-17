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
import { useInfiniteQuery } from 'react-query';

export type FeedType = {
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
  };
  has_next: boolean;
};

export type FeedContextValue = {
  profilePicture: string;
  feed: FeedType[] | undefined;
  fetchProfilePicture: () => void;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
  feed: undefined,
  fetchProfilePicture: () => {},
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

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<FeedType>(
      'feed',
      async () => {
        const response = await axios.get(`${BASE_URL}/feed`, {
          headers: {
            Authorization: `Bearer ${userInfo?.token.id_token}`,
          },
        });
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
        getNextPageParam: (lastPage) => lastPage.has_next && lastPage.id,
      },
    );

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
    };
  }, [profilePicture, feed, fetchProfilePicture]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
