import { TextInputProps } from 'react-native';

interface ExtraInputProps {
  isPassword?: boolean;
  fontSize?: number;
  rightIcon?: boolean;
  passwordMatchs?: boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
