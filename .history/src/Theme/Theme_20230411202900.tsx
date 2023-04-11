import { DefaultTheme } from 'styled-components/native';

export interface MyTheme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
  };
  fontSizes: {
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
  fontSizes: {
    small: 12,
    medium: 14,
    large: 16,
  },
};

export type ThemeType = typeof theme;

export default theme;
