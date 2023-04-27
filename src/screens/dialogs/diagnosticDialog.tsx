import React, { Children, useState } from "react";
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
import KymaModal from "../../components/KymaModal";

const DiagnosticDialog = () => {
  return (
    <KymaModal title="Diagnóstico">
      <Text></Text>
      <View
        style={{
          width: "100%",
          height: "90%",
          marginTop: 50,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: "#1F6C65",
            marginLeft: 10,
            borderRadius:10,
            overflow:"hidden",
            width:"95%",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
          }}
        >
           <Text style={{fontSize: 25, color: "white",}}>Severidade:</Text> 
           <Text style={{fontSize: 25, color: "white",}}>Moderada</Text>
        </View>

        <View
          style={{
            width: "100%",
            height: "90%",
            padding: 10,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <DialogCard />
          <DialogCard />
          <DialogCard />
          <DialogCard />
        </View>
      </View>
    </KymaModal>
  );
};

export default DiagnosticDialog;

const DialogCard = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        height: 110,
        width: 150,
        borderRadius: 10,
        padding: 10,
        paddingBottom: 15,
        backgroundColor: "#1F6C65",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: 50,
            backgroundColor: "white",
            height: 50,
            justifyContent: "center",
            padding: 3,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Icon name="mic" size={30} color="#1F6C65" />
        </View>

        <Text style={{ color: "white", fontSize: 28 }}>16x</Text>
      </View>

      <Text
        style={{ color: "white", textTransform: "uppercase", fontSize: 16 }}
      >
        Prolongações
      </Text>
    </View>
  );
};
