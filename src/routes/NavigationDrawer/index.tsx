import { createDrawerNavigator } from '@react-navigation/drawer';

import {PageD} from '../../screens/PageD';
import {PageE} from '../../screens/PageE';

const drawer = createDrawerNavigator();

export function NavigationDrawer(){

  return (

    <drawer.Navigator>
      <drawer.Screen name="TelaD" component={PageD} />
      <drawer.Screen name="TelaE" component={PageE} />
    </drawer.Navigator>
  );
}