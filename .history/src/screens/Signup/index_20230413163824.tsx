import React, { useState, useLayoutEffect, useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native';
import { propsStack } from '@/routes/Stack/Models';
import Button from '@/components/Button';
import { BASE_URL } from '@/config';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Input from '@/components/Input';
import { AuthResponse } from '@/context/Auth';
import {
  Header,
  Container,
  Content,
  InputEmail,
  InputPassword,
  Label,
  AcasoLogo,
  Cadastro,
  SignupText,
  ErrorText,
  LabelPassword,
  ContentButton,
  BackLoginText,
} from './styles';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigation = useNavigation<propsStack>();
  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const registerUser = useCallback(
    async (
      email: string,
      password: string,
      first_name: string,
      last_name: string,
    ) => {
      try {
        await axios.post<AuthResponse>(`${BASE_URL}/auth/sign-up`, {
          email,
          password,
          first_name,
          last_name,
        });
        navigation.navigate('ConfirmEmail', { email });
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro ao cadastrar',
        });
      }
    },
    [navigation],
  );

  useLayoutEffect(() => {
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <Container>
      <ScrollView keyboardDismissMode="on-drag">
        <Header>
          <AcasoLogo source={require('./images/logo.png')} />
          <Cadastro>Cadastro</Cadastro>
        </Header>
        <Content>
          <Label>E-mail*</Label>
          <Input
            placeholder="seu@email.com"
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => firstNameRef.current?.focus()}
            returnKeyType="next"
            rightIcon={false}
            passwordMatch={passwordMatch}
          />
          <Label>Primeiro nome*</Label>
          <Input
            ref={firstNameRef}
            placeholder="Primeiro nome"
            placeholderTextColor="gray"
            value={firstName}
            onChangeText={setFirstName}
            onSubmitEditing={() => lastNameRef.current?.focus()}
            returnKeyType="next"
            passwordMatch={passwordMatch}
            rightIcon={false}
          />
          <Label>Último nome*</Label>
          <Input
            ref={lastNameRef}
            placeholder="Último nome"
            placeholderTextColor="gray"
            value={lastName}
            onChangeText={setLastName}
            onSubmitEditing={() => passwordRef.current?.focus()}
            returnKeyType="next"
            rightIcon={false}
            passwordMatch={passwordMatch}
          />
          <Label>Senha*</Label>
          <Input
            ref={passwordRef}
            passwordMatch={passwordMatch}
            placeholderTextColor="gray"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            returnKeyType="next"
            secureTextEntry
            rightIcon={false}
            passwordMatch={passwordMatch}
          />
          {!passwordMatch && <ErrorText>Senhas não coincidem</ErrorText>}
          <LabelPassword passwordMatch={passwordMatch}>
            Confirme sua senha*
          </LabelPassword>
          <Input
            ref={confirmPasswordRef}
            passwordMatch={passwordMatch}
            placeholderTextColor="gray"
            placeholder="Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            rightIcon={false}
            passwordMatch={passwordMatch}
          />
          {!passwordMatch && <ErrorText>Senhas não coincidem</ErrorText>}
        </Content>
        <Button
          onPress={() => registerUser(email, password, firstName, lastName)}
          width={339}
          height={50}
          isWhite
        >
          <SignupText>Criar conta em aca.so</SignupText>
        </Button>

        <ContentButton>
          <Button
            onPress={() => {
              navigation.navigate('Login');
            }}
            width={339}
            height={50}
            isWhite={false}
          >
            <BackLoginText>Voltar ao login</BackLoginText>
          </Button>
        </ContentButton>
      </ScrollView>
    </Container>
  );
};

export default Signup;
