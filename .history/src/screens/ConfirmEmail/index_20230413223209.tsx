import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { BASE_URL } from '@/config';
import { propsStack, propsNavigationStack } from '@/routes/Stack/Models';
import axios from 'axios';
import { AuthResponse } from '@/context/Auth';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Button from '@/components/Button';
import {
  Header,
  Container,
  Content,
  Input,
  Label,
  AcasoLogo,
  HeaderText,
  ConfirmText,
  CodeText,
  TimeText,
} from './styles';

const ConfirmEmail = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const route = useRoute<RouteProp<propsNavigationStack, 'ConfirmEmail'>>();
  const { email } = route.params;
  const [countdown, setCountdown] = useState(120);
  const navigation = useNavigation<propsStack>();

  const resendCode = useCallback(async (emailParam: string) => {
    try {
      await axios.post<AuthResponse>(
        `${BASE_URL}/auth/resend-confirmation-code`,
        {
          email: emailParam,
        },
      );
      setIsButtonDisabled(true);
      setCountdown(120);
      setTimer(setTimeout(() => setIsButtonDisabled(false), 120000));
    } catch (error: any) {
      if (error.response.data.code === 'ERR.1.0008') {
        Toast.show({
          type: 'error',
          text1: 'Email não registrado',
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Tente novamente mais tarde',
        });
      }
    }
  }, []);

  const confirmSignUp = useCallback(
    (emailParam: string, confirmation_code: string) => {
      axios
        .post<AuthResponse>(`${BASE_URL}/auth/confirm-sign-up`, {
          email: emailParam,
          confirmation_code,
        })
        .then((response) => {
          if (response.status === 200) {
            navigation.navigate('Login');
          }
        })
        .catch((error: any) => {
          console.log(error);
          if (error.response.data.code === 'ERR.1.0004') {
            Toast.show({
              type: 'error',
              text1: 'Código de confirmação inválido',
            });
          } else if (error.response.data.code === 'ERR.1.0005') {
            Toast.show({
              type: 'error',
              text1: 'Código de confirmação expirado',
            });
          } else if (error.response.data.code === 'ERR.1.0008') {
            Toast.show({
              type: 'error',
              text1: 'Email não registrado',
            });
          }
        });
    },
    [navigation],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(countdown / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (countdown % 60).toString().padStart(2, '0');

  useLayoutEffect(() => {
    // Inicia o timer assim que a tela for montada
    setIsButtonDisabled(true);
    setCountdown(120);
    const newTimer = setTimeout(() => setIsButtonDisabled(false), 120000);
    setTimer(newTimer);
    // Limpa o timer quando a tela for desmontada
    return () => clearTimeout(newTimer);
  }, [setIsButtonDisabled, setCountdown]);

  const handleTimeButtonClick = () => {
    setIsButtonDisabled(true);
    clearTimeout(timer as NodeJS.Timeout);

    setTimeout(() => {
      setIsButtonDisabled(false);
      setCountdown(120);
    }, 120000);

    resendCode(email);
  };

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        <HeaderText>Confirmar {'\n'}e-mail</HeaderText>
      </Header>
      <ScrollView keyboardDismissMode="on-drag">
        <Label>Código</Label>
        <Content>
          <Input
            placeholder="Digite o código recebido..."
            placeholderTextColor="gray"
            value={confirmationCode}
            onChangeText={setConfirmationCode}
          />
          <Button
            onPress={() => {
              confirmSignUp(email, confirmationCode);
            }}
            width={339}
            height={50}
            isWhite
          >
            <ConfirmText>Confirmar e-mail</ConfirmText>
          </Button>
          <CodeText>Não recebeu o código?</CodeText>
          <Button
            onPress={handleTimeButtonClick}
            disabled={isButtonDisabled}
            width={339}
            height={50}
          >
            <TimeText>
              {isButtonDisabled
                ? `Aguarde ${minutes}:${seconds} para reenviar`
                : 'Reenviar código'}
            </TimeText>
          </Button>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default ConfirmEmail;
