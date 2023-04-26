import React, { Children, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import KymaModal from '../../components/KymaModal';


const ExerciceDialog = ({ title, data }) => {

    return (
        <KymaModal title={title} >
            <View style={{ width:"100%", height:"90%",marginTop:30}}>

                <View style={{ flex: 1, width: "100%" , padding:10}}>
                    <Image source={data.img} style={{
                        width: "100%",
                        borderRadius: 5,
                        height: "100%"
                    }} />
                </View>

                <View style={{ flex: 2,  width: "100%", padding:10}}>
                    <Text style={{fontSize:24,marginBottom:10 }}>{data.title}</Text>
                    <Text style={{marginBottom:15, fontSize:18}}>1. {data.description}</Text>
                    <Text style={{fontSize:16}}>{data.steps}</Text>
                </View>

            </View>
        </KymaModal>
    )


}

export default ExerciceDialog;