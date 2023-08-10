import React, { Children, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, IMGS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ExerciceDialog from "../dialogs/ExerciceDialog";
import auth from "@react-native-firebase/auth";
const menuOptions = [
  {
    name: "Diagnóstico",
    icon: "body-outline",
    color: COLORS.primary,
    route: ROUTES.DIAGNOSTIC,
    id: 1,
  },
  {
    name: "Leitura Expressiva",
    icon: "document",
    color: COLORS.primary,
    route: ROUTES.TEXT_GENERATOR,
    id: 2,
  },
  {
    name: "Feedback Auditivo",
    icon: "mic",
    color: COLORS.primary,
    route: ROUTES.FLUENCY,
    id: 3,
  },
  {
    name: "Leitura assistida",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.READER,
    id: 4,
  },
  {
    name: "Respiração Diafragmática ",
    icon: "man",
    color: COLORS.primary,
    route: ROUTES.BREATHING,
    id: 5,
  },
  {
    name: "Memória Auditiva",
    icon: "mic-circle",
    color: COLORS.primary,
    route: ROUTES.AUDITIVEMEMORY,
    id: 6,
  },
  {
    name: "Prolongamento de Som",
    icon: "musical-notes",
    color: COLORS.primary,
    route: ROUTES.SOUNDPROLONGATION,
    id: 7,
  },
  {
    name: "Visualização Criativa",
    icon: "clipboard",
    color: COLORS.primary,
    route: ROUTES.CREATIVEVISUALISATION,
    id: 8,
  },
  {
    name: "Sobre Nós",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 9,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const MenuItem = ({ name, icon, color, route }) => {
    return (
      <View
        style={{
          marginLeft: 3,
          marginBottom: 20,
          alignItems: "center",
          width: "30%",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(route)}
          style={{
            width: 70,
            borderRadius: 50,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: color,
          }}
        >
          <Icon name={icon} size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Image style={styles.img} source={IMGS.bgPattern} />
        <View style={styles.overlay}></View>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerContentTitle}>Olá Geovane</Text>
          <Text style={styles.bannerContentText}>
            Bem vindo ao seu assistente de terapia!
          </Text>
        </View>
      </View>
      <View style={styles.menuArea}>
        {menuOptions.map(({ name, icon, id, color, route }) => {
          return (
            <MenuItem
              key={id}
              name={name}
              icon={icon}
              route={route}
              color={color}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bannerWrapper: {
    flex: 1,
    width: "100%",
    marginTop: "10%",
    borderRadius: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.dark,
    opacity: 0.4,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  bannerContent: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 20,
    top: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    padding: 15,
  },
  bannerContentText: {
    color: COLORS.white,
    fontSize: 20,
  },
  bannerContentTitle: {
    color: COLORS.white,
    fontSize: 24,
    marginBottom: 10,
  },
  menuArea: {
    flex: 2,
    padding: 20,
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",

    // alignItems:"center"
  },
  buttonWithIcon: {},
});
