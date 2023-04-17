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

export type FeedType = {
  {
    "has_next": false,
    "data": [
      {
        "id": "string",
        "created_at": "2023-04-16T00:15:09.810Z",
        "updated_at": "2023-04-16T00:15:09.810Z",
        "type": "talk",
        "data": {
          "id": "string",
          "name": "string",
          "subscribed": true,
          "initial_hour": "2023-04-16T00:15:09.810Z",
          "microverse": {
            "id": "string",
            "name": "string",
            "profile_picture": "string",
            "primary_color": "string",
            "secondary_color": "string",
            "highlight_color": "string"
          }
        }
      }
    ]
  }
};

type FeedContextValue = {
  profilePicture: string;
  feed: FeedType[];
  fetchProfilePicture: () => void;
  refetchFeed: () => void;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
  feed: [],
  fetchProfilePicture: () => {},
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

  const { data: feed, refetch: refetchFeed } = useQuery<FeedType[]>(
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

  useEffect(() => {
    if (userInfo) {
      fetchProfilePicture();
    }
  }, [fetchProfilePicture, userInfo]);

  const contextValue = useMemo(() => {
    return {
      profilePicture,
      feed: feed || [],
      fetchProfilePicture,
      refetchFeed,
    };
  }, [profilePicture, feed, fetchProfilePicture, refetchFeed]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
