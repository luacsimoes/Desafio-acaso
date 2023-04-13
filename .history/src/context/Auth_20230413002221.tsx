import React, {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
} from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@/config';
import { propsStack } from '@/routes/Stack/Models';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: {
    access_token: string;
    id_token: string;
    refresh_token: string;
  };
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    groups: ('mentor' | 'general' | 'admin' | 'bi')[];
    auth_token: string;
  };
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => void;
  userInfo?: AuthResponse;
  userId?: string;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<AuthResponse>();
  const navigation = useNavigation<propsStack>();

  const signOut = useCallback((): Promise<void> => {
    setUserInfo(undefined);
    return AsyncStorage.removeItem('userInfo');
  }, []);

  const signIn = useCallback((email: string, password: string) => {
    axios
      .post<AuthResponse>(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response && response.status === 200) {
          const userInfo = response.data;
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
      })
      .catch((error) => {
        if (error.response && error.response.code === 'ERR.1.0002') {
          Toast.show({
            type: 'error',
            text1: 'E-mail ou senha inválidos',
          });
        } else if (error.response && error.response.code === 'ERR.1.0001') {
          navigation.navigate('ConfirmEmail', { email });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Algo deu errado, tente novamente mais tarde',
          });
        }
      });
  }, []);

  const contextValue = useMemo(() => {
    return {
      signIn,
      userInfo,
      signOut,
    };
  }, [signIn, userInfo, signOut]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
