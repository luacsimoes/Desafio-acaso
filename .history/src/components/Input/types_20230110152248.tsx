import { TextInputProps } from 'react-native';

interface ExtraInputProps {
  isPassword?: boolean;
  fontSize?: number;
}

export type InputProps = TextInputProps & ExtraInputProps;
