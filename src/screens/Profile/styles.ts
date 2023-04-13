import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Container = styled.View`
  flex: 1;
  background-color: #000004;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  width: 144px;
  height: 144px;
  border-radius: 77px;
  position: absolute;
  border: 8.5px;
  border-color: white;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  position: absolute;
  bottom: 130px;
  right: 150px;
`;

export const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  position: absolute;
  margin-top: 350px;
`;

export const FirstName = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
  font-weight: 700;
  font-size: 51px;
  font-style: italic;
  text-transform: uppercase;
`;

export const LastName = styled.Text`
  color: white;
  color: white;
  font-family: 'Raleway-Regular';
  font-weight: 300;
  font-size: 51px;
  font-style: italic;
  text-transform: uppercase;
`;

export const ActivityTime = styled.Text<{ theme: ThemeType }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-weight: 300;
  font-style: italic;
  font-size: 16px;
  margin-top: 17px;
  margin-bottom: 50px;
`;

export const Sair = styled.Text<{ theme: ThemeType }>`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;

export const StrongText = styled.Text`
  font-weight: 700;
`;
