import {NavigationContainer} from '@react-navigation/native';

import { NavigationStack } from './NavigationStack';
import { NavigationTab } from './NavigationTab';
import { NavigationDrawer } from './NavigationDrawer';


export function Routes(){

  return (
    <NavigationContainer>
      <NavigationStack  />
      {/* <NavigationTab/> */}
      {/* <NavigationDrawer/> */}
    </NavigationContainer>
  )
}