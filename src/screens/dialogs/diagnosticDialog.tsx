import React, { Children, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, IMGS, ROUTES } from "../../constants";
import {
  Text,
  View
} from "react-native";
import KymaModal from "../../components/KymaModal";
import useData from "../../hooks/useData";
const DiagnosticDialog = () => {
  const { data } = useData();
  // disfluencyPercentage,
  // severity,
  // hesitationMatches,
  // prolongationMatches,
  // repetitionMatches,

  const dataCard = [
    {
      id: 1,
      icon: "person-remove",
      text: "Disfluência",
      qtd: data?.disfluencyPercentage,
      simbol: "%",
    },
    {
      id: 2,
      icon: "ellipsis-horizontal",
      text: "Hesitações",
      qtd: data?.hesitationMatches,
      simbol: "x",
    },
    {
      id: 3,
      icon: "reorder-four",
      text: "Prolongações",
      qtd: data?.prolongationMatches,
      simbol: "x",
    },
    {
      id: 4,
      icon: "sync-outline",
      text: "Repetições",
      qtd: data?.repetitionMatches,
      simbol: "x",
    },
  ];
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
            borderRadius: 10,
            overflow: "hidden",
            width: "95%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 25, color: "white" }}>Severidade:</Text>
          <Text style={{ fontSize: 25, color: "white" }}>{data?.severity}</Text>
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
          {dataCard.map((item) => {
            return (
              <DialogCard
                simbol={item.simbol}
                text={item.text}
                icon={item.icon}
                qtd={item.qtd}
                key={item.id}
              />
            );
          })}
        </View>
      </View>
    </KymaModal>
  );
};

export default DiagnosticDialog;

const DialogCard = ({ simbol, icon, text, qtd }: any) => {
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
          <Icon name={icon} size={30} color="#1F6C65" />
        </View>

        <Text style={{ color: "white", fontSize: 28 }}>
          {qtd}
          {simbol}
        </Text>
      </View>

      <Text
        style={{ color: "white", textTransform: "uppercase", fontSize: 16 }}
      >
        {text}
      </Text>
    </View>
  );
};
