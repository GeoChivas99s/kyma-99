import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import {COLORS , ROUTES , IMGS} from '../../constants';


export default function Login() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
    <View>
      <Image source={IMGS.logo}/>
    </View>
 
   
    </View>
  );
}


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white
      ,
    },
  });
  