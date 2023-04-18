import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  background-color: black;
  margin-top: 16px;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  background-color: #1e1f2f;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Message = styled.Text`
  margin-left: 8px;
`;
