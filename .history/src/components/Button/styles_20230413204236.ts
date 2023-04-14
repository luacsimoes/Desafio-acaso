import styled from 'styled-components/native';
import theme, { MyTheme, ThemeType } from '@/Theme/Theme';

interface ButtonContainerProps {
  isWhite?: boolean;
  width: number;
  height: number;
  theme: MyTheme;
}

interface ButtonTextProps {
  isWhite?: boolean;
  theme: MyTheme;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.secondary : theme.colors.primary};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.primary : theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
`;
