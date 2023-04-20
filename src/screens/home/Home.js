import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const menuOptions = [
  {
    name: "Diagnóstico",
    icon: "body-outline",
    color: "red",
    route: ROUTES.HOME,
    id: 1
  },
  {
    name: "Gerador de texto",
    icon: "document",
    color: "red",
    route: ROUTES.HOME,
    id: 2
  },
  {
    name: " Efeito Playback atrasado",
    icon: "mic",
    color: "red",
    route: ROUTES.HOME,
    id: 3
  },
  {
    name: "Leitura assistida",
    icon: "book",
    color: "red",
    route: ROUTES.HOME,
    id: 4
  },
  {
    name: "Terapia individual",
    icon: "man",
    color: "red",
    route: ROUTES.HOME,
    id: 5
  },
  {
    name: "Terapia fonoaudiológica",
    icon: "mic-circle",
    color: "red",
    route: ROUTES.HOME,
    id: 6
  },
  {
    name: "leitura",
    icon: "book",
    color: "red",
    route: ROUTES.HOME,
    id: 7
  },
  {
    name: "Sobre Nós",
    icon: "book",
    color: "red",
    route: ROUTES.HOME,
    id: 8
  },
  {
    name: "Sobre Nós",
    icon: "book",
    color: "red",
    route: ROUTES.HOME,
    id: 9
  }

];



const Home = () => {
  const navigation = useNavigation();
  // const MenuItem = ({ route, color, name, icon }) => {
  //   return (
  //     <View style={{borderWidth:4}}>
  //       <TouchableOpacity onPress={() => navigation.navigate(route)}>
  //         <Icon name={icon} size={50} color={COLORS.black} />
  //         <Text>{name}</Text>
  //       </TouchableOpacity>
  //     </View>

  //   )
  // }
  const MenuItem = ({ name, icon }) => {
    return (
      <View style={{ marginLeft: 3, marginBottom: 20, alignItems: "center", width: "30%" }} >
        <TouchableOpacity style={styles.buttonWithIcon}>
          <Icon name={icon} size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Image style={styles.img} source={IMGS.banner} />
        <View style={styles.overlay}>
        </View>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerContentText}>Bem vindo ao seu assistente de terapia!</Text>
          <Text style={styles.bannerContentText}>Kyma</Text>
        </View>
      </View>
      <View style={styles.menuArea} >
        {
          menuOptions.map(({ name, icon, id }) => {
            return (
              <MenuItem key={id} name={name} icon={icon} />
            )
          })
        }

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10
  },
  bannerWrapper: {
    flex: 1,
    width: "100%",
    marginTop: "10%",
    borderRadius: 20

  }, img: {
    width: "100%",
    height: "100%",
    borderRadius: 20

  }, overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.4,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }, bannerContent: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 20,
    top: 40,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }, bannerContentText: {
    color: COLORS.white,
    fontSize: 18
  },
  menuArea: {
    flex: 2,
    padding: 20,
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap"

    // alignItems:"center"
  },
  buttonWithIcon: {
    width: 70,
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.warning
  }

});
