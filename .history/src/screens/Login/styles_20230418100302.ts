import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Header = styled.View`
  display: flex;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.View`
  display: flex;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: linear-gradient(271.62deg, #ae1448 0%, #e93f78 98.53%);
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

export const Enter = styled.Text`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;

export const RememberCreateAccount = styled.Text<{ theme: ThemeType }>`
  color: white;
  margin-top: ${({ theme }) => theme.margin.large}px;
  text-align: center;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const CreateAccount = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;
