import styled from 'styled-components/native';
import { ThemeType } from '@/Theme/Theme';

export const Container = styled.View`
  flex-grow: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #1e1f2f;
  flex-1
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ProfilePicture = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 77px;
  border: 2px;
  border-color: white;
  position: absolute;
  top: 29px;
  z-index: 1;
  right: 24px;
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
  margin-left: 24px;
  z-index: 0;
  margin-bottom: 16px;
`;
