import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Settings, Exercices, ExerciceSelf, ExecercicePeople} from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function ExcercicesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.TERAPY} component={Exercices} />
      <Stack.Screen name={ROUTES.EXERCICESELF} component={ExerciceSelf} />
      <Stack.Screen name={ROUTES.EXERCICEPEOPLE} component={ExecercicePeople} />
    </Stack.Navigator>
  );
}

export default ExcercicesNavigator;
