import styled from 'styled-components/native';

interface InputSenhaProps {
  passwordMatch: boolean;
}

export const InputEmail = styled.TextInput<InputSenhaProps>`
  align-items: center;
  justify-content: center;
  background-color: #1e1f2f;
  height: 50px;
  width: 339px;
  padding: 16px;
  top: 8px;
  border-radius: 6px;
  color: white;
  margin-bottom: ${(props) => (props.passwordMatch ? '24px' : '8px')};
  font-size: 12px;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 60px;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
