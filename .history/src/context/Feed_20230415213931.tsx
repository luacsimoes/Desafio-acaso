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
  };
};

export type FeedType = {
  has_next: boolean;
  data: FeedItemType[];
};

export type FeedContextValue = {
  profilePicture: string;
  feed: FeedType | null;
  fetchProfilePicture: () => void;
  refetchFeed: () => void;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
  feed: null,
  fetchProfilePicture: () => {},
  refetchFeed: () => {},
});

const FeedProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();

  const fetchProfilePicture = useCallback(async () => {
    // ...
  }, [userInfo]);

  const { data: feed, refetch: refetchFeed } = useQuery<FeedType>(
    'feed',
    async () => {
      // ...
    },
    {
      enabled: !!userInfo,
      refetchOnWindowFocus: false,
      onError: (error: any) => {
        // ...
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
      feed,
      fetchProfilePicture,
      refetchFeed,
    };
  }, [profilePicture, feed, fetchProfilePicture, refetchFeed]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
