import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import theme from './Theme';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
