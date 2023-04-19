import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const menuOptions = [
  {
    name: "leitura",
    icon: "book",
    color: "red",
    route: ROUTES.HOME
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
  const MenuItem = () => {
    return (
      <View >
        <TouchableOpacity style={styles.buttonWithIcon}>
          <Icon name={"book"} size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Text>Sambapito</Text>
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
      <ScrollView style={styles.menuArea} alignItems="center">
    


        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

  container: {
    borderWidth: 1,
    flex: 1
  },
  bannerWrapper: {
    flex: 1/2,
    width: "100%",

  }, img: {
    width: "100%",
    height: "100%"
  }, overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.7,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"

  }, bannerContent: {
    position: "absolute",
    alignSelf: "center",
    top: 40,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }, bannerContentText: {
    color: COLORS.white,
    fontSize: 18
  },
  menuArea: {
    flex: 3,
    padding:45,
    borderWidth: 3,
    alignContent: "center",
    // alignItems:"center"
  },
  buttonWithIcon: {
    borderRadius: 50, padding: 20, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.warning
  }

});
