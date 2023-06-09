import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, DATA } from '../../constants';
import Svg, { Path } from 'react-native-svg';
import ExerciceDialog from '../dialogs/ExerciceDialog';
import useData from '../../hooks/useData';

const ExecercicePeople = () => {

  const {
    setOpenModal,
    setData,
    data
  } = useData();

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
        <Text style={{ textTransform: "uppercase", fontSize: 18, color: COLORS.white }}>Terapia em público</Text>
        <View style={{ height: "85%" }}>
          <ScrollView style={{ marginTop: 100, padding: 5, }} justifyContent="space-between" >
            {
              DATA.data2.map((item) => {
                return (
                  <MinCard key={item.id} data={item} handleClick={() => { setOpenModal(prev => !prev); setData(item) }} />
                )
              })
            }
          </ScrollView>
          <ExerciceDialog title="Terapia Individual" data={data} />
        </View>
      </View>
    </View>
  );
};

export default ExecercicePeople;

const styles = StyleSheet.create({});


const MinCard = ({ data, handleClick }) => {
  const { id, img, title } = data
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        borderWidth: 1,
        height: 100, borderRadius: 5,
        flexDirection: "row",
        alignItems: "center", padding: 5,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
        marginBottom: 10
      }}>
      <View style={{ width: "30%" }}>
        <Image source={img}
          style={{
            width: "100%",
            borderRadius: 5,
            height: "100%"
          }} />

        <View style={{
          width: "100%",
          height: "100%",
          backgroundColor: COLORS.dark,
          opacity: 0.3,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5
        }}>
          <Text style={{ color: "white", fontSize: 50 }}>{id}</Text>
        </View>
      </View>
      <View style={{ width: "70%", padding: 15 }}>
        <Text style={{ fontSize: 16, color: COLORS.white }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}