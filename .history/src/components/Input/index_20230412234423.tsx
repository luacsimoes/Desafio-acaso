import React, { useState, forwardRef } from 'react';
import { Image, TextInput } from 'react-native';
import { RightIcon, InputWrapper, InputEmail } from './styles';
import { InputProps } from './types';

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { isPassword, rightIcon, ...props },
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
      {isPassword && rightIcon && (
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
