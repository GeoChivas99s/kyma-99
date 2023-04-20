import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS, IMGS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.banner} style={{ height: 140 }}>
        <Image source={IMGS.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
      <View  >
        <TouchableOpacity  style={styles.exitButton}>
          <Icon name='exit' color={COLORS.gray} size={20}/>
          <Text style={{color:COLORS.gray, marginLeft:12, fontSize:16}}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },exitButton:{
   flexDirection:"row",
   width:"90%",
   alignItems:"center",
   justifyContent:"flex-start",
   padding:5,
   marginLeft:15,
   borderRadius:5,
  //  backgroundColor:COLORS.danger
  }
});
