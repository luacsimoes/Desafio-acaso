import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '@/context/Auth';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@/config';
import { propsStack } from '@/routes/Stack/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfileScreenProps = {
  userPicture: string;
};

const FeedProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    async function fetchProfilePicture() {
      try {
        const response = await axios.get(
          `https://api.staging.aca.so/user/profile/${userInfo?.user?.id}`,
        );
        setProfilePicture(response.data.profile_picture);
      } catch (error: any) {
        if (error.response.status === 404) {
          setProfilePicture('');
        } else {
          console.error(error);
        }
      }
    }
    fetchProfilePicture();
  }, [userInfo]);
};
