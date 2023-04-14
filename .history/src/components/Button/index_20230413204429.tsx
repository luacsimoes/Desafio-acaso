import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import theme from '@/Theme/Theme';
import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  width: number;
  height: number;
  isWhite?: boolean;
  children: React.ReactNode;
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
