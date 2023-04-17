import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '@/screens/Profile';
import Feed from '@/screens/Feed';
import FeedProvider from '@/context/Feed';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default AuthStack;
