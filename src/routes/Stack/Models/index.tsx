import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Login: undefined;
  ProfileScreen: undefined;
  Signup: undefined;
  ConfirmEmail: { email: string };
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
