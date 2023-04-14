import React, { useState, forwardRef } from 'react';
import { Image, TextInput } from 'react-native';
import { RightIcon, InputWrapper, InputEmail } from './styles';
import { InputProps } from './types';

interface Props extends InputProps {
  rightIcon?: JSX.Element;
}

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { isPassword, rightIcon = false, ...props },
  ref,
) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <InputWrapper>
      <InputEmail
        {...props}
        placeholderTextColor="gray"
        secureTextEntry={isPassword && hidePassword}
        ref={ref}
      />
      {isPassword &&
        rightIcon && ( // adiciona uma condição para renderizar o RightIcon se rightIcon for true
          <RightIcon
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Image
              source={require('./images/eye.png')}
              style={{
                position: 'absolute',
              }}
            />
          </RightIcon>
        )}
    </InputWrapper>
  );
};

export default forwardRef(Input);
