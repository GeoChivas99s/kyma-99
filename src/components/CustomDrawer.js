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
      <View style={{position:"absolute",top:700, width:"100%"}} >
        <TouchableOpacity  style={styles.exitButton}>
          <Text style={{color:COLORS.white, marginRight:12, fontSize:16}}>
            Sair
          </Text>
          <Icon name='exit' color={COLORS.white} size={20}/>
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
   width:"50%",
   alignItems:"center",
   justifyContent:"center",
   padding:10,
   marginLeft:15,
   borderRadius:5,
   backgroundColor:COLORS.danger
    
  }
});
