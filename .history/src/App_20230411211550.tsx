import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import ThemeProvider from './Theme/ThemeProvider';
import { AuthProvider } from './context';
import Route from './routes';
import { toastConfig } from './Toast/toastConfig';
import { BASE_URL } from './config';

export const App = () => {
  const defineInterceptor = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          const originalReq = err.config;
          if (err.response.status === 401 && err.config && !err.config.retry) {
            originalReq.retry = true;
            AsyncStorage.getItem('TOKEN').then((token) => {
              const res = axios
                .post(`${BASE_URL}/auth/refresh-token`, { oldToken: token })
                .then((res) => {
                  AsyncStorage.setItem('TOKEN', res.data.access_token);
                  originalReq.headers.Authorization = `Bearer ${res.data.token.access_token}`;
                  return axios(originalReq);
                });
              resolve(res);
            });
          } else {
            reject(err);
          }
        });
      },
    );
  };
  defineInterceptor();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <Route />
        </AuthProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
