import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import theme, { MyTheme } from '@/Theme/Theme';
import { ButtonContainer, ButtonText } from './styles';

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

interface ButtonTextProps {
  isWhite?: boolean;
  theme: MyTheme;
}

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
