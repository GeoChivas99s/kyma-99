import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, ROUTES } from '../../constants';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import ExerciceDialog from '../dialogs/ExerciceDialog';
const Wallet = () => {
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
            d='M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,229.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
          />
        </Svg>

      </View>

      <View style={{ flex: 1, marginTop: -40, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ textTransform: "uppercase", fontSize: 18, color: COLORS.white }}>Terapias</Text>
        <View style={{ marginTop: 110, padding: 10, height: "55%", justifyContent: "space-between" }}>
          <OptionCard title="Ensaiando em casa" subtitle="Exercícios individuais" size="9" color="#47A082" path={ROUTES.EXERCICESELF} />
          <OptionCard title="Ensaiando em público" subtitle="Exercícios com ajuda externa" size="5" color="#47A082" path={ROUTES.EXERCICEPEOPLE} />

        </View>
      </View>
      <ExerciceDialog />
    </View>
  );
};

export default Wallet;

const OptionCard = ({ title, subtitle, size, color, path }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: "#FFFFFF",
      height: "48%",
      borderRadius: 5,
      padding: 10,
      flexDirection: "column",
      justifyContent: "space-between",

    }}>
      <Text style={{ fontSize: 28 }}>{title}</Text>
      <Text style={{
        backgroundColor: color,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        fontSize: 18,
        color: COLORS.white,
        width: "85%",
        borderRadius: 5,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: color
      }} >{subtitle}</Text>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth: 1,
        marginTop: 10,
        paddingLeft: 0,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 50
      }}>
        <TouchableOpacity style={{
          width: 130,
          padding: 10,
          borderRadius: 5,
          backgroundColor: COLORS.primary
        }}
          onPress={() => navigation.navigate(path)}>
          <Text style={{ color: "white", fontSize: 18 }}>Ver <Icon name="arrow-forward" /></Text>
        </TouchableOpacity>
        <Text >Qtd:{size}</Text>
      </View>
    </View>)

}