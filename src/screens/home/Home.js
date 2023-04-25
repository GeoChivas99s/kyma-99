import React, { Children, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';
const menuOptions = [
  {
    name: "Diagnóstico",
    icon: "body-outline",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 1
  },
  {
    name: "Gerador de texto",
    icon: "document",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 2
  },
  {
    name: " Efeito Playback",
    icon: "mic",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 3
  },
  {
    name: "Leitura assistida",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 4
  },
  {
    name: "Terapia individual",
    icon: "man",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 5
  },
  {
    name: "Terapia fonoaudiológica",
    icon: "mic-circle",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 6
  },
  {
    name: "leitura",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 7
  },
  {
    name: "Sobre Nós",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 8
  },
  {
    name: "Sobre Nós",
    icon: "book",
    color: COLORS.primary,
    route: ROUTES.HOME,
    id: 9
  }

];



const Home = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const MenuItem = ({ name, icon, color }) => {
    return (
      <View style={{ marginLeft: 3, marginBottom: 20, alignItems: "center", width: "30%" }} >
        <TouchableOpacity style={{
          width: 70,
          borderRadius: 50,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color
        }}>
          <Icon name={icon} size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Image style={styles.img} source={IMGS.bgPattern} />
        <View style={styles.overlay}>
        </View>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerContentTitle}>Olá Geovane</Text>
          <Text style={styles.bannerContentText} >Bem vindo ao seu assistente de terapia!</Text>

        </View>
      </View>
      <View style={styles.menuArea} >

        {
          menuOptions.map(({ name, icon, id, color }) => {
            return (
              <MenuItem key={id} name={name} icon={icon} color={color} />
            )
          })
        }
      </View>
      <WrapperComponent>
        <Text>Olá bom dia</Text>
      </WrapperComponent>
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
    backgroundColor: COLORS.dark,
    opacity: 0.4,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  }, bannerContent: {
    position: "absolute",
    alignSelf: "center",
    borderRadius: 20,
    top: 0,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    height: "100%",
    padding: 15
  }, bannerContentText: {
    color: COLORS.white,
    fontSize: 20
  }, bannerContentTitle: {
    color: COLORS.white,
    fontSize: 24,
    marginBottom: 10
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

  }

});
function WrapperComponent({ children }) {

  return (
    <View>
      <Modal isVisible={false}
        style={{ paddingTop: 25, paddingBottom: 10 }}
      >
        <View style={{ flex: 1, backgroundColor: COLORS.white,padding:5 , alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: 15 }}>
        <TouchableOpacity style={{alignSelf:"flex-end" , position:"absolute", top:5, right:10}}>
          <Icon name='close' size={40} color={COLORS.gray}/>
        </TouchableOpacity>
          <View style={{borderBottomWidth:1 ,width:"100%" ,
           borderColor:COLORS.grayLight ,position:"absolute", 
           top:30, alignItems:"center", padding:5}}><Text style={{textTransform:"uppercase"}}> Gerador de texto</Text></View>
          {
            children
          }
        </View>
      </Modal>
    </View>
  );
}