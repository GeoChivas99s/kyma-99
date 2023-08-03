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
import { COLORS, ROUTES, IMGS } from "../../constants";
import LoadingSpinner from "../../components/progressBar";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidValues = () => Boolean(email) && Boolean(password);
  const handleSigIn = () => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response) {
          setEmail('')
          setPassword('')
          navigation.navigate(ROUTES.HOME);
          console.log(response)
        }
      })
      .catch((err) => Alert.alert("Usuário ou senha inválida"))

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
          value={email}
          style={styles.formImput}
          placeholder="Email"
      
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          style={styles.formImput}
          secureTextEntry
         
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
        />

        <TouchableOpacity
          disabled={!isValidValues()}
          style={styles.buttonLogin}
          onPress={handleSigIn}
        >
          {isLoading ? (
            <LoadingSpinner color="white" />
          ) : (
            <Text style={styles.text}> Entrar</Text>
          )}
        </TouchableOpacity>
        <Text style={{ color: COLORS.primary }}>Esqueceu a senha?</Text>
      </View>
      <View style={styles.registerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text>
            Ainda não tem uma conta?{" "}
            <Text style={{ color: COLORS.primary }}>Criar Conta</Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginBottom: 20,
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
    height: 400,
    justifyContent: "space-between",
    marginTop: "45%",
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
    height: 60,
    borderRadius: 10,
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
