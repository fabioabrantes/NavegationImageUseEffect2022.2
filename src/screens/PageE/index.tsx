import { DrawerActions,useNavigation } from '@react-navigation/native';
import { Content } from '../../components/Content';

import { Container,Header,ButtonBack,ButtonMove} from './styles';

export function PageE() {

  const navigation = useNavigation();

  function handleOpenOrClosedDrawer(){
    navigation.dispatch(DrawerActions.toggleDrawer);
    setTimeout(() => {
      navigation.dispatch(DrawerActions.closeDrawer);
    }, 3000);
  }
  return (
    <Container >
      <Header>
        <ButtonBack title="Testando o Toggle" onPress={handleOpenOrClosedDrawer}/>
      </Header>
      
      <Content nameScreen='Tela E'/>
    </Container>
  );
}