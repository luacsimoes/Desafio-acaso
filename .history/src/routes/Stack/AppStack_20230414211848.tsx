import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/screens/Login';
import Signup from '@/screens/Signup';
import ConfirmEmail from '@/screens/ConfirmEmail';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
    </Stack.Navigator>
  );
};

export default AppStack;
