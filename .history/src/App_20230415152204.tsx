import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import ThemeProvider from './Theme/ThemeProvider';
import { AuthProvider, AuthContext, AuthResponse } from './context/Auth';
import Route from './routes';
import FeedProvider from './context/Feed';
import { toastConfig } from './Toast/toastConfig';
import { BASE_URL } from './config';

export const App = () => {
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          const originalRequest = error.config;
          const refreshToken = await AsyncStorage.getItem('refreshToken');

          if (refreshToken) {
            axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
            const response = await axios.post<AuthResponse>(
              `${BASE_URL}/auth/refresh`,
              {
                refresh_token: userInfo.token.refresh_token,
              },
            );
            AsyncStorage.setItem('token', response.data.token.access_token);
            AsyncStorage.setItem(
              'refreshToken',
              response.data.token.refresh_token,
            );
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token.access_token}`;
            originalRequest.headers.Authorization = `Bearer ${response.data.token.access_token}`;
            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );
    return () => axios.interceptors.response.eject(interceptor);
  }, []);

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
