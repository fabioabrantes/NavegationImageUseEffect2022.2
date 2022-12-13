import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { PageA } from '../../screens/PageA';
import { PageB } from '../../screens/PageB';
import { PageC } from '../../screens/PageC';

const stack = createNativeStackNavigator();

export function NavigationStack(){

  return (
    <stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{
        headerShown:false,
      }}
    >
      <stack.Screen 
        name='TelaA'
        component={PageA}
      />
      <stack.Screen 
        name='TelaB'
        component={PageB}
      />
      <stack.Screen 
        name='TelaC'
        component={PageC}
      />
    </stack.Navigator>
  )
}