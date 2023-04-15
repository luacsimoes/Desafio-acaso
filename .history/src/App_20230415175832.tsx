import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import ThemeProvider from './Theme/ThemeProvider';
import { AuthProvider, AuthContext } from './context/Auth';
import Route from './routes';
import FeedProvider from './context/Feed';
import { toastConfig } from './Toast/toastConfig';
import { BASE_URL } from './config';

export const App = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);

  const defineInterceptor = () => {
    axios.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (err) => {
        const originalReq = err.config;
        if (err.response.status === 401 && err.config && !err.config.retry) {
          originalReq.retry = true;
          const token = await AsyncStorage.getItem('TOKEN');
          const res = await axios.post(
            `${BASE_URL}/auth/refresh-token`,
            { oldToken: token },
            {
              headers: {
                Authorization: `Bearer ${userInfo?.token.refresh_token}`,
              },
            },
          );
          await AsyncStorage.setItem('access_token', res.data.access_token);
          await AsyncStorage.setItem('id_token', res.data.id_token);
          originalReq.headers.Authorization = `Bearer ${res.data.token.access_token}`;
          const updatedAuthData = {
            ...userInfo,
            access_token<string>: res.data.access_token,
            id_token<string>: res.data.id_token,
          };
          setUserInfo(updatedAuthData);
          return axios(originalReq);
        }
        throw err;
      },
    );
  };

  defineInterceptor();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <FeedProvider>
            <Route />
          </FeedProvider>
        </AuthProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
