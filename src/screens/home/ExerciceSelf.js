import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import React from 'react';
import { COLORS, IMGS, ROUTES } from '../../constants';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const ExerciceSelf = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>

      <View style={{ height: 120, backgroundColor: COLORS.primary, flex: 1 / 6 }}>
        <Svg
          height={300}
          width={Dimensions.get("screen").width}
          viewBox='0 0 1440 320'
        >
          <Path
            fill={COLORS.primary}
            d='M0,320L1440,96L1440,0L0,0Z'
          />
        </Svg>
      </View>

      <View style={{ flex: 1, marginTop: -40, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ textTransform: "uppercase", fontSize: 18, color: COLORS.white }}>Terapias individual</Text>
        <View style={{ height: "90%" }}>

          <ScrollView height="10%" style={{ marginTop: 110, padding: 10, borderWidth: 1 }} >
            <Text>Polo</Text>
            <MinCard />
          </ScrollView>

        </View>
      </View>
    </View>
  );
};

export default ExerciceSelf;

const styles = StyleSheet.create({});


const MinCard = () => {
  return (
    <View style={{ borderWidth: 1, height: 100, borderRadius: 5, flexDirection: "row", alignItems: "center", padding: 5 }}>
      <View style={{ width: "30%" }}>
        <Image source={IMGS.step1} style={{ width: "100%", borderRadius: 5, height: "100%" }} />
        <View style={{
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.dark,
          opacity: 0.6,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5
        }}>
          <Text style={{ color: "white", fontSize: 50 }}>81</Text>
        </View>
      </View>
      <View style={{ width: "70%", padding: 15 }}>
        <Text>Análise de TExto</Text>
      </View>
    </View>
  )
}