import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLORS, IMGS } from '../../constants';

const Home = () => {
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
      <View style={styles.menuArea}>
        <Text> Bom dia </Text>
      </View>
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
    flex: 1,
    borderWidth: 1,
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
    alignSelf:"center",
    top:40,
    zIndex:5,
    justifyContent:"center",
    alignItems:"center",
    width: "100%",
    height: "100%",
  },bannerContentText:{
    color:COLORS.white,
    fontSize:18
  },
  menuArea: {
    flex: 2
  }

});
