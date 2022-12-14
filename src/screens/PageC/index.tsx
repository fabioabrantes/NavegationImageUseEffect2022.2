import { useNavigation, useRoute } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import { Container} from './styles';

interface IParams{
  numero: number;
}

export function PageC() {

  const route = useRoute();
  const info = route.params as IParams;

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  function handleMoveScreenDrawer(){
    navigation.navigate("NavigationDrawer");
  }

  return (
    <Container >
      <Header onBack={handleGoBack} onMove={handleMoveScreenDrawer}/>
    
      <Content nameScreen='Tela C'/>
      <Content nameScreen={info? info.numero : 500}/>
    </Container>
  );
}