import { createDrawerNavigator } from '@react-navigation/drawer';

import {PageD} from '../../screens/PageD';
import {PageE} from '../../screens/PageE';

import {NavigationTab} from '../NavigationTab';

const drawer = createDrawerNavigator();

export function NavigationDrawer(){

  return (

    <drawer.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <drawer.Screen name="TelaD" component={PageD} />
      <drawer.Screen name="TelaE" component={PageE} />
      <drawer.Screen name="NavigationTab" component={NavigationTab} />
    </drawer.Navigator>
  );
}