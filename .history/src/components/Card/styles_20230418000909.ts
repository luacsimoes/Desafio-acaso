import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;

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
  align-items: center;
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
  margin-right: 16px;
  padding: 8px;
  border-radius: 4px;
  flex: 1;
`;

export const Message = styled.Text`
  color: white;
  flex-wrap: wrap;
`;
