import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Header = styled.View`
  display: flex;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #030446;
`;

export const Input = styled.TextInput`
  background-color: #1e1f2f;
  height: 50px;
  width: 339px;
  padding: 16px;
  border-radius: 6px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: white;
`;

export const Label = styled.Text<{ theme: ThemeType }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 61px;
  margin-top: 24px;
`;

export const LabelPassword = styled.Text<
  { passwordMatch: boolean } & { theme: ThemeType }
>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 61px;
  margin-top: ${(props) => (props.passwordMatch ? '24px' : '0px')};
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
`;

export const HeaderText = styled.Text`
  margin-top: 77px;
  margin-bottom: 54px;
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const SignupText = styled.Text<{ theme: ThemeType }>`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: 700;
`;

export const ConfirmButton = styled.TouchableOpacity`
  height: 52px;
  width: 339px;
  border-radius: 30.5px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const TimeButton = styled.TouchableOpacity`
  height: 52px;
  width: 339px;
  border-radius: 30.5px;
  background-color: #ffffff33;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const BackLogin = styled.TouchableOpacity`
  height: 52px;
  width: 339px;
  border-radius: 30.5px;
  background-color: #ffffff1a;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const BackLoginText = styled.Text<{ theme: ThemeType }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: 700;
`;

export const CodeText = styled.Text<{ theme: ThemeType }>`
  color: white;
  margin-top: 24px;
  text-align: center;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const TimeText = styled.Text<{ theme: ThemeType }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: 700;
`;

export const ConfirmText = styled.Text<{ theme: ThemeType }>`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: 700;
`;
