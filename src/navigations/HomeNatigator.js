import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home , Diagnostic, TextGenerator, Reader , Fluency, Breathing , CreativeVisualisation , SoundProlongation , AuditiveMemory} from '../screens';
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
      <Stack.Screen name={ROUTES.READER} component={Reader} />
      <Stack.Screen name={ROUTES.BREATHING} component={Breathing} />
      <Stack.Screen name={ROUTES.FLUENCY} component={Fluency} />
      <Stack.Screen name={ROUTES.CREATIVEVISUALISATION} component={CreativeVisualisation} />
      <Stack.Screen name={ROUTES.SOUNDPROLONGATION} component={SoundProlongation} />
      <Stack.Screen name={ROUTES.AUDITIVEMEMORY} component={AuditiveMemory} />
    </Stack.Navigator>
  );
}

export default HomeNatigator;
