import React, { useState, useContext, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '@/routes/Stack/Models';
import { TextInput } from 'react-native';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { AuthContext } from '@/context/Auth';
import {
  Header,
  Container,
  Content,
  InputEmail,
  Label,
  AcasoLogo,
  LoginText,
  Enter,
  CreateAccount,
  RememberCreateAccount,
} from './styles';

const Login = () => {
  const navigation = useNavigation<propsStack>();
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<TextInput>(null);

  const handleEmailSubmitEditing = () => {
    passwordRef.current?.focus();
  };

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        <LoginText>Login</LoginText>
      </Header>
      <Content>
        <Label>Email</Label>

        <InputEmail
          placeholder="seu@email.com"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={handleEmailSubmitEditing}
        />
      </Content>
      <Label>Senha</Label>
      <Content>
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          isPassword
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="gray"
          onSubmitEditing={() => {
            if (passwordRef.current) {
              passwordRef.current.blur();
              signIn(email, password);
            }
          }}
          blurOnSubmit
        />
        <Button
          onPress={() => {
            signIn(email, password);
          }}
          width={339}
          height={50}
          isWhite
        >
          <Enter>Entrar</Enter>
        </Button>
      </Content>
      <RememberCreateAccount>Não possui conta em aca.so?</RememberCreateAccount>
      <Content>
        <Button
          onPress={() => {
            navigation.navigate('Signup');
          }}
          width={339}
          height={50}
          isWhite={false}
        >
          <CreateAccount>Criar uma conta</CreateAccount>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
