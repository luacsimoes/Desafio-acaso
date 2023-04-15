import React, { useEffect, useContext, useState, useCallback } from 'react';
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
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [interceptor, setInterceptor] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const access_token = await AsyncStorage.getItem('access_token');
        const refresh_token = await AsyncStorage.getItem('refresh_token');

        if (!access_token || !refresh_token) {
          // Não há token, usuário não está logado
          return;
        }

        // Verifica se o token é válido
        const response = await axios.post<AuthResponse>(
          `${BASE_URL}/auth/verify-token`,
          {
            access_token,
          },
        );

        if (response.data.status === 'valid') {
          // Token é válido, define o token para todas as requisições
          axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

          // Cria um interceptor para lidar com 401 (Unauthorized)
          const interceptorId = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
              if (error.response && error.response.status === 401) {
                const refresh = await AsyncStorage.getItem('refresh_token');
                console.log(refresh);
                const originalRequest = error.config;

                if (refresh) {
                  axios.defaults.headers.common.Authorization = `Bearer ${refresh}`;
                  const response = await axios.post<AuthResponse>(
                    `${BASE_URL}/auth/refresh-token`,
                    {
                      refresh_token: userInfo?.token.refresh_token,
                    },
                  );
                  AsyncStorage.setItem(
                    'access_token',
                    response.data.token.access_token,
                  );
                  axios.defaults.headers.common.Authorization = `Bearer ${response.data.token.access_token}`;
                  originalRequest.headers.Authorization = `Bearer ${response.data.token.access_token}`;

                  setUserInfo({
                    ...userInfo,
                    token: {
                      access_token: response.data.token.access_token,
                      id_token: response.data.token.refresh_token,
                      refresh_token: response.data.token.refresh_token,
                    },
                  });

                  return axios(originalRequest);
                }
              }
              return Promise.reject(error);
            },
          );

          // Salva o interceptor para ser removido mais tarde
          setInterceptor(interceptorId);
        } else {
          // Token inválido, tenta renovar
          const response = await axios.post<AuthResponse>(
            `${BASE_URL}/auth/refresh-token`,
            {
              refresh_token,
            },
          );
          AsyncStorage.setItem('access_token', response.data.token.access_token);
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token.access_token}`;
          setUserInfo({
            ...userInfo,
            token: {
              access_token: response.data.token.access_token,
              id_token: response.data.token.refresh_token,
                refresh_token: response.data.token.refresh_token,
              },
            });

            return axios(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, [userInfo, setUserInfo]);

  // Chamando a função interceptor
  if (interceptor !== null) {
    interceptor();
  }

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
