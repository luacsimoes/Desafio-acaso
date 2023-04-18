import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  background-color: #1e1f2f;
  padding: 8px;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

export const MessageContainer = styled.View`
  flex-grow: 1;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
  max-width: 70%;
`;
