import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './Theme/ThemeProvider';
import { AuthProvider, AuthContext } from './context/Auth';
import Route from './routes';
import { toastConfig } from './Toast/toastConfig';
import { BASE_URL } from './config';

const queryClient = new QueryClient();

export const App = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);

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
          originalReq.headers.Authorization = `Bearer ${res.data.access_token}`;
          setUserInfo((userInfo) => {
            if (userInfo) {
              const { access_token, id_token } = res.data;
              return {
                token: {
                  access_token,
                  id_token,
                  refresh_token: userInfo.token.refresh_token,
                },
                user: userInfo.user,
              };
            }
            return undefined;
          });
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          return axios(originalReq);
        }
        // Adicione este bloco para chamar a função signOut
        if (err.response.status === 401 && err.config && err.config.retry) {
          const { signOut } = useContext(AuthContext);
          signOut();
        }
        throw err;
      },
    );
  };
  defineInterceptor();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationContainer>
          <AuthProvider>
            <Route />
          </AuthProvider>
        </NavigationContainer>
        <Toast config={toastConfig} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
