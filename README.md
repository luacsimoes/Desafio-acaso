# mobile-jr-challenge
Desafio é um aplicativo desenvolvido em React Native, que possui um fluxo completo de autenticação do usuário. Após a autenticação, o usuário tem acesso a telas como ProfileScreen e Feed. O aplicativo é projetado para fornecer uma experiência de usuário intuitiva e fácil de usar. Através do uso do React Native, é possível ter uma base de código compartilhada entre plataformas Android e iOS, o que permite uma implementação rápida e eficiente.

# Login
Na tela de Login do aplicativo, são acessadas informações do contexto de autenticação para permitir que as informações retornadas da rota de login possam ser administradas em outras páginas do aplicativo. Isso é possível através do armazenamento dessas informações no contexto de autenticação, que permite que elas sejam acessadas e utilizadas em diferentes partes do aplicativo, como autorizações e outras funcionalidades que requerem informações do usuário autenticado. Essa abordagem ajuda a simplificar a lógica do aplicativo e oferece uma experiência mais consistente para o usuário final. Além disso, ao usar o contexto de autenticação, é possível manter a segurança das informações do usuário, garantindo que apenas usuários autorizados possam acessá-las.

![image](https://user-images.githubusercontent.com/100871735/233373993-7fed85a1-0170-495d-a570-9fc20349e327.png)


# Signup
A tela de Signup é onde o usuário pode se cadastrar no aplicativo. Nessa tela, são realizados tratamentos para possíveis erros, como senhas que não coincidem ou um usuário que já está cadastrado. Esses tratamentos permitem que o aplicativo dê feedback ao usuário em sua tentativa de cadastro, informando-o sobre os erros cometidos e orientando-o sobre como corrigi-los. Esses feedbacks ajudam a melhorar a experiência do usuário e a aumentar a eficiência do cadastro. Além disso, ao realizar esses tratamentos, é possível garantir a integridade dos dados do usuário e a segurança do aplicativo.

![image](https://user-images.githubusercontent.com/100871735/233374136-5d1ea36b-9c44-4667-afed-2a26460b6d3d.png)


# ConfirmEmail
Na tela de confirmação do usuário, é enviado um código para o e-mail cadastrado pelo usuário durante o processo de Signup. Para garantir a segurança do processo de confirmação, é realizada uma contagem regressiva de dois minutos antes que o código possa ser reenviado. Além disso, são realizados tratamentos de erros para garantir que o usuário receba o código corretamente e para informá-lo caso haja algum problema com o envio. Esses tratamentos de erros ajudam a garantir a integridade do processo de confirmação e a oferecer uma experiência mais satisfatória para o usuário final. Ao confirmar o e-mail, o usuário pode acessar todas as funcionalidades disponíveis no aplicativo e usufruir da experiência completa do aplicativo.

![image](https://user-images.githubusercontent.com/100871735/233372819-fce2ad96-bbbc-415d-abdc-b3cd67999e8c.png)

# Feed
Na tela de Feed do aplicativo, é possível visualizar os posts que são retornados pela requisição de feed, que são renderizados em cards componentizados. No header da tela, pode ser vista a foto de perfil do usuário logado, que ao ser clicada, direciona o usuário para sua tela de perfil. Vale ressaltar que algumas estilizações ainda precisam ser implementadas na tela de Feed para garantir uma melhor experiência de usuário, mas essas alterações foram encaminhadas para serem realizadas em um momento posterior.

![image](https://user-images.githubusercontent.com/100871735/233398693-6832f900-d280-4293-9c7e-04efb4319534.png)


# Profile
Na tela de perfil do usuário, é possível visualizar sua foto, nome e tempo de atividade. Além disso, é exibida a badge do usuário, que representa seu nível de experiência no aplicativo. No entanto, vale ressaltar que algumas informações ainda estão estáticas na tela de perfil e não estão sendo utilizadas adequadamente, como a badge e o tempo de atividade.

Para melhorar a experiência do usuário na tela de perfil, é importante garantir que todas as informações disponíveis sejam exibidas de forma correta e atualizada. Dessa forma, é possível fornecer uma experiência mais personalizada e agradável ao usuário. Para isso, é necessário utilizar as informações disponíveis no contexto de autenticação para atualizar a badge e o tempo de atividade do usuário. Com essas informações atualizadas, é possível oferecer um perfil mais completo e atraente para o usuário final.

![image](https://user-images.githubusercontent.com/100871735/233398971-0697da62-b58c-4d63-9b40-9e90a7a6dbe4.png)

## Pontos a melhorar
- Separar as informações do user profile do contexto do feed
- Utilizar o Theme em todas as pastas de style
- Terminar a estilização do feed

## Project configured with:
- husky
- eslint
- plop
- styled components
- storybook
- axios
- async storage
- jest

## Note
Before everything, run `yarn && yarn husky install` in the root folder to enable Husky
