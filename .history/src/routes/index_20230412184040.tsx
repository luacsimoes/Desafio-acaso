import React, { useContext } from 'react';
import { AuthContext } from '@/context/Auth';
import AuthStack from './Stack/AuthStack';
import AppStack from './Stack/AppStack';

export const Route = () => {
  const { userInfo } = useContext(AuthContext);
  return userInfo ? <AuthStack /> : <AppStack />;
};

export default Route;
