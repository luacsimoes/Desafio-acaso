import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: pink;
  border-radius: 8px;
  padding: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #1e1f2f;
  max-width: 100%;
  margin-bottom: 16px;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 16px;
  border: 4px;
  border-color: pink;
`;

export const MessageContainer = styled.View`
  width: 100%;
  background-color: orange;
  border-radius: 4px;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
`;

export const MenuImage = styled.Image``;

export const Content = styled.View`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.View`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: pink;
`;
