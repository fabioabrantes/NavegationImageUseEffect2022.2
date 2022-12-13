import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import {useRoute, useNavigation} from '@react-navigation/native';

import { Container,} from './styles';

interface IParams{
  numero: number;
}
export function PageB() {

  const route = useRoute();
  const info = route.params as IParams;

  const navigation = useNavigation();

  function handleMoveScreenC(){
    navigation.navigate("TelaC", {numero:300})
  }
  function handleGoBack(){
    navigation.goBack();
  }
  
  return (
    <Container >
      <Header onBack={handleGoBack} onMove={handleMoveScreenC}/>
      
      <Content nameScreen='Tela B'/>
      <Content nameScreen={info? info.numero : 300}/>
    </Container>
  );
}