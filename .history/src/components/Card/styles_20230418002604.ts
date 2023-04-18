import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: pink;
  border-radius: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #1e1f2f;
  max-width: 100%;
  padding: 8px;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
  border: 4px;
  border-color: pink;
`;

export const MessageContainer = styled.View`
  background-color: orange;
  border-radius: 4px;
  width: 250px;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
`;

export const MenuImage = styled.Image`
  margin-top: 8px;
`;
