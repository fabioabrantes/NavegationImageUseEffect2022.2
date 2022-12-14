import {useNavigation} from '@react-navigation/native';
import { Content } from '../../components/Content';

import { Container,Header,ButtonBack,ButtonMove} from './styles';

export function PageD() {

  const navigation = useNavigation();

  function handleMoveScreenE(){
    navigation.navigate("TelaE");
  }

  function handleMoveScreenTab(){
    navigation.navigate("NavigationTab");
  }
  
  return (
    <Container >
      <Header>
        <ButtonBack title="Ir para Tela E" onPress={handleMoveScreenE}/>
        <ButtonMove title="Ir para Tela de Tab" onPress={handleMoveScreenTab}/>
      </Header>
      
      <Content nameScreen='Tela D'/>
    </Container>
  );
}