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
  has_next: boolean;
  data: {
    has_mentoring_available: boolean;
    badge: string;
    first_name: string;
    id: string;
    last_access_at: string;
    last_name: string;
    profile_picture: string;
  };
  id: string;
  type: string;
  updated_at: string;
  created_at: string;
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
      const response = await axios.get(`${BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      setProfilePicture(response.data.profile_picture);
    } catch (error: any) {
      if (error.response?.status === 404) {
        console.log('fetchProfilePicture');
        setProfilePicture('');
      } else {
        console.error('else profile');
      }
    }
  }, [userInfo]);

  const getPosts = async (page: number) => {
    const response = await axios.get(`${BASE_URL}/feed/?page=${page}`, {
      headers: {
        Authorization: `Bearer ${userInfo?.token.id_token}`,
      },
    });
    console.log(response.data, getPosts);
    return response.data;
  };

  const {
    data,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['posts'], ({ pageParam = 1 }) => getPosts(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, 'lastPage');
      console.log(allPages, 'allPages');

      if (lastPage && lastPage.has_next) {
        const lastPageIndex = allPages.findIndex((page) => page === lastPage);

        if (lastPageIndex !== -1 && lastPageIndex < allPages.length - 1) {
          return allPages[lastPageIndex + 1];
        }
      }

      return undefined;
    },
  });

  useEffect(() => {
    if (userInfo) {
      fetchProfilePicture();
    }
  }, [fetchProfilePicture, userInfo]);

  const contextValue = useMemo(() => {
    const adaptedData = data?.pages?.flatMap((page) => page.data) || [];
    console.log(adaptedData);
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
