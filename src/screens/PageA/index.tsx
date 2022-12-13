import {useNavigation} from "@react-navigation/native";

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import { Container} from './styles';

export function PageA() {

  const navigation = useNavigation();
  
  function handleMovetoScreenB(){
    navigation.navigate("TelaB",{numero:30});
  }
  return (
    <Container >
      <Header onMove={handleMovetoScreenB}/>
      
      <Content nameScreen='Tela A'/>
    </Container>
  );
}