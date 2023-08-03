import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore, { serverTimestamp } from "@react-native-firebase/firestore";
import { COLORS, ROUTES, IMGS } from "../../constants";
import LoadingSpinner from "../../components/progressBar";

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isValid = () =>
    Boolean(name) &&
    Boolean(password) &&
    Boolean(email) &&
    Boolean(phoneNumber);

  const handleRegister = () => {
    setIsLoading(true);
    firestore()
      .collection("users")
      .add({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then((response) => {
        if (response) {
          Alert.alert("Usuário adicionado com sucesso!");
          console.log("User added!");
        }
      })
      .catch((err) => Alert.alert("Erro ao criar o usuário!!"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.img} source={IMGS.logo} />
        </View>
        <TextInput
          style={styles.formImput}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.formImput}
          keyboardType="numeric"
          placeholder="Telefone"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.formImput}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.formImput}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.buttonLogin}
          disabled={!isValid()}
          onPress={handleRegister}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Text style={styles.text}>Registar</Text>
          )}
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
