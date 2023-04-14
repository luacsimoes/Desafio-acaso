import { DefaultTheme } from 'styled-components/native';

export interface MyTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
  };
  margin: {
    small: number;
    medium: number;
    large: number;
  };
}

export const theme: MyTheme = {
  colors: {
    primary: '#FFFFFF1A',
    secondary: '#FFFFFF',
  },
  margin: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

export type ThemeType = typeof theme;

export default theme;
