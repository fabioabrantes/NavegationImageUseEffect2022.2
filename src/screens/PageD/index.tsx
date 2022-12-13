import {useNavigation} from '@react-navigation/native';
import { Content } from '../../components/Content';

import { Container,Header,ButtonBack,ButtonMove} from './styles';

export function PageD() {

  const navigation = useNavigation();

  function handleMoveScreenE(){
    navigation.navigate("TelaE");
  }

  return (
    <Container >
      <Header>
        <ButtonBack title="Ir para Tela E" onPress={handleMoveScreenE}/>
      </Header>
      
      <Content nameScreen='Tela D'/>
    </Container>
  );
}