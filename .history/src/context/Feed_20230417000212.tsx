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
import { useInfiniteQuery } from 'react-query';
import { AuthContext } from '@/context/Auth';
import { BASE_URL } from '@/config';

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
};

export type FeedContextValue = {
  profilePicture: string;
  data: FeedType[] | undefined;
  fetchProfilePicture?: () => void;
  isLoading: boolean;
  fetchNextPage?: () => void;
  refetch?: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
  data: undefined,
  fetchProfilePicture: undefined,
  isLoading: false,
  fetchNextPage: undefined,
  refetch: undefined,
  hasNextPage: undefined,
  isFetchingNextPage: false,
});

const FeedProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const { userInfo } = useContext(AuthContext);

  const fetchProfilePicture = useCallback(async () => {
    try {
      if (!userInfo || !userInfo.token || !userInfo.token.id_token) {
        console.error('Missing user info or token');
        return;
      }
      const response = await axios.get(`${BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${userInfo.token.id_token}`,
        },
      });
      if (response.data && response.data.profile_picture) {
        setProfilePicture(response.data.profile_picture);
      } else {
        console.error('Invalid response data format');
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        console.log('fetchProfilePicture');
        setProfilePicture('');
      } else {
        console.error('Error fetching profile picture', error);
      }
    }
  }, [userInfo]);

  useEffect(() => {
    console.log(userInfo, 'feed cont');
  }, [userInfo]);

  const getPosts = async (page = 1) => {
    const response = await axios.get(`${BASE_URL}/feed/?page=${page}`, {
      headers: {
        Authorization: `Bearer ${userInfo?.token.id_token}`,
      },
    });
    console.log(response.data, 'try');
    return response.data;
  };

  const getNextPageParam = (lastPage: any) => {
    if (
      lastPage &&
      lastPage.length > 0 &&
      lastPage[lastPage.length - 1].has_next
    ) {
      return lastPage.length + 1;
    }
    return undefined;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['posts'], ({ pageParam }) => getPosts(pageParam), {
    getNextPageParam,
  });
  useEffect(() => {
    console.log(data, 'data context');
  }, [data]);

  useEffect(() => {
    if (userInfo) {
      fetchProfilePicture();
    }
  }, [fetchProfilePicture, userInfo]);

  const contextValue = useMemo(() => {
    const adaptedData = data?.pages?.flatMap((page) => page.data) || [];
    console.log(adaptedData, 'adapted');
    return {
      profilePicture,
      data: adaptedData,
      fetchProfilePicture,
      isLoading,
      isFetchingNextPage,
      hasNextPage,
      refetch,
      fetchNextPage,
    };
  }, [
    profilePicture,
    data?.pages,
    fetchProfilePicture,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    refetch,
    fetchNextPage,
  ]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
