import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: pink;
  border-radius: 8px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  background-color: #1e1f2f;
  padding: 8px;
  width: 100%;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const MessageContainer = styled.View`
  flex-grow: 1;
  background-color: orange;
  flex-wrap: wrap;
  margin-right: 8px;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
  max-width: 90%;
`;
