import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Container = styled.View`
  flex: 1;
  background-color: green;
  align-items: center;
`;

export const Header = styled.View`
  justify-content: center;
  background-color: #1e1f2f;
  width: 100%;
`;

export const ProfilePicture = styled.Image`
  width: 144px;
  height: 144px;
  border-radius: 77px;
  position: absolute;
  border: 8.5px;
  border-color: white;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
  margin-left: 24px;
  margin-bottom: 16px;
`;
