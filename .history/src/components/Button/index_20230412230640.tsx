import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme, { MyTheme } from '@/Theme/Theme';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  width: number;
  height: number;
  isWhite?: boolean;
  children: React.ReactNode;
}

interface ButtonContainerProps {
  isWhite?: boolean;
  width: number;
  height: number;
  theme: MyTheme;
}

const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height / 2}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.secondary : theme.colors.primary};
`;

interface ButtonTextProps {
  isWhite?: boolean;
  theme: MyTheme;
}

const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.colors.primary : theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
`;

const Button = ({
  onPress,
  width,
  height,
  isWhite,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer
      onPress={onPress}
      width={width}
      height={height}
      isWhite={isWhite}
      theme={theme}
      {...rest}
    >
      <ButtonText isWhite={isWhite} theme={theme}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
};

export default Button;
