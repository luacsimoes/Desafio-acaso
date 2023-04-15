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
      if (!userInfo) {
        console.error('User info not available');
        return;
      }

      const response = await axios.get(
        `${BASE_URL}/user/profile/${userInfo.user.id}`,
      );
      const profilePictureUrl = response.data.profile_picture;

      if (!profilePictureUrl) {
        console.error('Profile picture URL not found');
        return;
      }

      setProfilePicture(profilePictureUrl);
      await AsyncStorage.setItem(
        'userPicture',
        JSON.stringify(profilePictureUrl),
      );
    } catch (error: any) {
      console.error('Error fetching profile picture', error);
      if (error.response?.status === 404) {
        setProfilePicture('');
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

  return (
    <FeedContext.Provider value={contextValue}>{children}</FeedContext.Provider>
  );
};

export default FeedProvider;
