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

import { COLORS, ROUTES, IMGS } from "../../constants";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.imageWrapper}>
          
          <Image style={styles.img} source={IMGS.logo} />
        
        </View>
        <TextInput style={styles.formImput} placeholder="Email" />
        <TextInput style={styles.formImput} placeholder="Senha" />

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.text}> Entrar</Text>
        </TouchableOpacity>
        <Text style={{color:COLORS.primary}} >Esqueceu a senha?</Text>
      </View>
      <View style={styles.registerWrapper}>
      <Text >Ainda não tem uma conta? <Text style={{color:COLORS.primary}}>Criar Conta</Text> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },textLogoRigth:{



  },
  imageWrapper: {
    width: 100,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:COLORS.primary
  },
  img: {
    width: "100%",
    height: "100%",
  },
  formWrapper: {
    //  flex:1,
    alignItems: "center",
    padding: 10,
    height: 400,
    justifyContent: "space-between",
    marginTop: "50%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  formImput: {
    width: "100%", 
    padding: 10,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.grayLight,
  },
  buttonLogin: {
    backgroundColor: COLORS.primary,
    height: 70,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: COLORS.white,
    fontSize:18
  
  }, registerWrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"flex-end",
      paddingBottom: "20%",
  }
});
