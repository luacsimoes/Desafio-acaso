import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: pink;
  border-radius: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #1e1f2f;
  max-width: 100%;
  padding: 8px;
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
  background-color: orange;
  border-radius: 4px;
  -ms-flex-wrap: 1;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
`;

export const MenuImage = styled.Image``;
