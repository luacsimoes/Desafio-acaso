import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Header = styled.View`
  display: flex;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #030446;
`;

export const InputEmail = styled.TextInput<{ theme: ThemeType }>`
  align-items: center;
  justify-content: center;
  background-color: #1e1f2f;
  height: 50px;
  width: 339px;
  padding: 16px;
  top: 8px;
  border-radius: 6px;
  margin-bottom: 24px;
  color: white;
  font-size: 12px;
`;

export const Label = styled.Text<{ theme: ThemeType }>`
  margin-left: 60.5px;
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 16px;
  font-weight: 500;
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
`;

export const LoginText = styled.Text`
  margin-top: 77px;
  margin-bottom: 54px;
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 32px;
  font-weight: 700;
`;

export const Enter = styled.Text<{ theme: ThemeType }>`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;

export const RememberCreateAccount = styled.Text<{ theme: ThemeType }>`
  color: white;
  margin-top: 24px;
  text-align: center;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const CreateAccount = styled.Text<{ theme: ThemeType }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;
