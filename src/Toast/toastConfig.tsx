import React from 'react';
import { ToastConfigParams } from 'react-native-toast-message';
import { ToastContainer, ToastText } from './styles';

interface ToastErrorProps extends ToastConfigParams<void> {
  text1?: string;
}

export const toastConfig = {
  error: ({ text1 }: ToastErrorProps) => {
    return (
      <ToastContainer>
        <ToastText>{text1 ?? ''}</ToastText>
      </ToastContainer>
    );
  },
};
