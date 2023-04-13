import React, { useState, forwardRef } from 'react';
import { Image, TextInput } from 'react-native';
import { RightIcon, InputWrapper, InputEmail } from './styles';
import { InputProps } from './types';

interface Props extends InputProps {
  rightIcon?: JSX.Element;
}

const Input: React.ForwardRefRenderFunction<TextInput, Props> = (
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
          {rightIcon}
        </RightIcon>
      )}
    </InputWrapper>
  );
};

export default forwardRef(Input);
