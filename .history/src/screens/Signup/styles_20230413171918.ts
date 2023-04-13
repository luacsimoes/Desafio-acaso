import styled from 'styled-components/native';

interface InputSenhaProps {
  passwordMatch: boolean;
}

export const Header = styled.View`
  display: flex;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  justify-content: center;
`;
export const ContentButton = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #030446;
`;

export const Label = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 61px;
  margin-top: 24px;
`;

export const LabelPassword = styled.Text<{ passwordMatch: boolean }>`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 61px;
  margin-top: ${(props) => (props.passwordMatch ? '0px' : '0px')};
`;

export const AcasoLogo = styled.Image`
  margin-top: 35px;
`;

export const Cadastro = styled.Text`
  margin-top: 77px;
  margin-bottom: 54px;
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 32px;
  font-weight: 700;
`;

export const SignupText = styled.Text`
  color: black;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;

export const BackLoginText = styled.Text`
  color: white;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
`;

export const ErrorText = styled.Text`
  color: #e93f78;
  font-family: 'Raleway-Regular';
  font-size: 12px;
  font-weight: 700;
  margin-left: 61px;
  margin-bottom: 25px;
`;

export const InputPassword = styled.TextInput<InputSenhaProps>`
  background-color: #1e1f2f;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 339px;
  padding: 16px;
  border-radius: 6px;
  margin-top: 8px;
  color: white;
  border-width: 2px;
  margin-bottom: ${(props) => (props.passwordMatch ? '24px' : '8px')};
  border-color: ${(props) => {
    return props.passwordMatch ? '#1E1F2F' : '#E93F78';
  }};
`;
