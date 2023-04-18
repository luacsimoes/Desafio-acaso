import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1e1f2f;
  align-items: center;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const Message = styled.Text`
  margin-left: 8px;
`;
