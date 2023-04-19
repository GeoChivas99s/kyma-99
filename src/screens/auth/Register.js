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
const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.img} source={IMGS.logo} />
        </View>
        <TextInput style={styles.formImput} placeholder="Nome" />
        <TextInput
          style={styles.formImput}
          keyboardType="numeric"
          placeholder="Telefone"
        />
        <TextInput
          style={styles.formImput}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput style={styles.formImput} placeholder="Senha" />
        <TextInput style={styles.formImput} placeholder="Repetir Senha" />

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate(ROUTES.HOME)}
        >
          <Text style={styles.text}>Registar</Text>
        </TouchableOpacity>
        <Text style={{ color: COLORS.primary }}>Voltar e fazer Login!</Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textLogoRigth: {},
  imageWrapper: {
    width: 100,
    padding: 5,
    height: 100,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  formWrapper: {
    //  flex:1,
    alignItems: "center",
    padding: 10,
    height: 600,
    justifyContent: "space-between",
    marginTop: "10%",
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
    fontSize: 18,
  },
  registerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20%",
  },
});
