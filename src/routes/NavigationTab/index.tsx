import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Feather} from '@expo/vector-icons';

import {PageA} from '../../screens/PageA';
import {PageB} from '../../screens/PageB';
import {PageC} from '../../screens/PageC';

const tab = createBottomTabNavigator();

export function NavigationTab(){

  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 20,color:'black'},
        tabBarStyle: {backgroundColor: 'yellow'},
        tabBarLabelPosition:"beside-icon",
        headerShown:false,
        }}
        initialRouteName="TelaA"
    >
      <tab.Screen
        name="TelaA"
        component={PageA}
        options={{
          title: 'Inicial',
          tabBarIcon: ({size, color}) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="TelaB"
        component={PageB}
        options={{
          title: 'Meio',
          tabBarIcon: ({size, color}) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="TelaC"
        component={PageC}
        options={{
          title: 'Final',
          tabBarIcon: ({size, color}) => (
            <Feather name="book" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
}