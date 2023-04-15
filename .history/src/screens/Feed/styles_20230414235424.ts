import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  justify-content: center;
  background-color: #1e1f2f;
  width: 100%;
`;

export const ProfilePicture = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 77px;
  position: absolute;
  border: 2px;
  border-color: white;
  top: 50%;
  left: 50%;
  z-index: 1;
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
  margin-left: 24px;
  z-index: 0;
  margin-bottom: 16px;
`;
