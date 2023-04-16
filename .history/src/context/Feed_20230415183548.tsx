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
import { propsStack } from '@/routes/Stack/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FeedContextValue = {
  profilePicture: string;
  fetchProfilePicture: () => void;
};

export const FeedContext = createContext<FeedContextValue>({
  profilePicture: '',
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
        setProfilePicture('');
      } else {
        console.error(error);
      }
    }
  }, [userInfo]);

  useEffect(() => {
    fetchProfilePicture();
  }, [fetchProfilePicture]);

  const contextValue = useMemo(() => {
    return {
      profilePicture,
      fetchProfilePicture,
    };
  }, [profilePicture, fetchProfilePicture]);

  const fetchFeed = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/feed`, {
        headers: {
          Authorization: `Bearer ${userInfo?.token.id_token}`,
        },
      });
      setFeed(response.data.data);
    } catch (error: any) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Erro ao buscar feed',
        text2: 'Por favor, tente novamente mais tarde.',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  }, [userInfo]);

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
