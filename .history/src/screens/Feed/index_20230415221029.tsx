import React, { useContext, useState } from 'react';
import { FeedContext } from '@/context/Feed';
import { View, Text, Image, FlatList } from 'react-native';
import Card from '@/components/Card';
import { Container, Header, AcasoLogo, ProfilePicture } from './styles';

const Feed = () => {
  const { feed, profilePicture } = useContext(FeedContext);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  const renderCard = ({ item }: { item: FeedType }) => {
    return <Card feedItem={item} />;
  };

  const loadMore = () => {
    // carrega mais cartões aqui
    // use setAllItemsLoaded(true) para parar de carregar mais itens quando todos estiverem carregados
  };

  const renderFooter = () => {
    if (allItemsLoaded) {
      return <Text style={{textAlign: 'center'}}>Não há mais itens para exibir.</Text>
    }
    return null;
  };

  return (
    <Container>
      <Header>
        <AcasoLogo source={require('./images/logo.png')} />
        {profilePicture !== '' ? (
          <ProfilePicture source={{ uri: profilePicture }} />
        ) : (
          <ProfilePicture source={require('./images/defaultimage.jpg')} />
        )}
      </Header>
      <FlatList
        data={feed}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={allItemsLoaded ? undefined : loadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

export default Feed;
Lembre-se de importar o componente Card e as definições de tipo para FeedType, se necessário. Além disso, certifique-se de atualizar o código para corresponder às suas necessidades e incluir o estilo apropriado para o componente.




Luana Simoes
ATUALIZE MINHA CONST loadMore COMO VAI FICAR NO FINAL
Claro! A sua função loadMore precisará atualizar o estado do hasNext para que a mensagem de "Não há mais posts" seja exibida. Então, você pode atualizá-la assim:

javascript
Copy code
const loadMore = () => {
  if (feed?.has_next) {
    // Aqui, você pode fazer a chamada para carregar mais posts.
  } else {
    setHasNext(false);
  }
};
Assim, quando o usuário chegar ao final da lista e não houver mais posts para carregar, o estado hasNext será atualizado para false e a mensagem será exibida.




Luana Simoes
JUNTE TODO O CÓDIGO
Desculpe, mas eu não tenho todo o código para juntar, já que as interações foram realizadas em partes separadas e sem uma visão geral do projeto como um todo. Você poderia me fornecer todas as partes do código que você tem para que eu possa juntá-las para você?





