import * as React from "react";
import { SafeAreaView, Text } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./src/navigations/AuthNavigator";
import { DataProvider } from "./src/context/dataContext";
import Toast from "react-native-toast-message";
import { Use } from "react-native-svg";
import { useAnimatedGestureHandler } from "react-native-reanimated";

import { handleTriggerNotification } from "./src/utils";

export default function App() {
  // isAuthenticated = is...

  React.useEffect( ()=>{
    // handleTriggerNotification()
  },[])
  return (
    <NavigationContainer>
      <DataProvider>
        <AuthNavigator />
        <Toast position="top" topOffset={80} visibilityTime={2000} />
      </DataProvider>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
    </NavigationContainer>
  );
}
