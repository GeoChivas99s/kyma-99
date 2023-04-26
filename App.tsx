import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './src/navigations/AuthNavigator';
import { DataProvider } from './src/context/dataContext';
export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      <DataProvider>
        
      <AuthNavigator />
      </DataProvider>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
    </NavigationContainer>
  );
}
