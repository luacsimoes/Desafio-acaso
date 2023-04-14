import React, { useState, forwardRef } from 'react';
import { Image, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { InputProps } from './types';

interface InputSenhaProps {
  passwordsMatch?: boolean;
}

interface Props extends InputProps {
  isPassword?: boolean;
  rightIcon?: boolean;
}

const Input: React.ForwardRefRenderFunction<TextInput, Props> = (
  { isPassword, rightIcon, ...props },
  ref,
) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const borderColor = isPassword && !passwordsMatch ? '#E93F78' : '#1E1F2F';

  return (
    <InputWrapper>
      <InputEmail
        {...props}
        placeholderTextColor="gray"
        secureTextEntry={isPassword && hidePassword}
        ref={ref}
        passwordsMatch={passwordsMatch}
        borderColor={borderColor}
      />
      {isPassword && rightIcon && (
        <rightIcon
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
