import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home , Diagnostic, TextGenerator} from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function HomeNatigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.HOME_PAGE} component={Home} />
      <Stack.Screen name={ROUTES.DIAGNOSTIC} component={Diagnostic} />
      <Stack.Screen name={ROUTES.TEXT_GENERATOR} component={TextGenerator} />
    </Stack.Navigator>
  );
}

export default HomeNatigator;
