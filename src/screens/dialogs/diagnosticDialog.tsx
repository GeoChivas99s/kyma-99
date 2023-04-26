
import React, { Children, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import KymaModal from '../../components/KymaModal';


const DiagnosticDialog = () => {

    return (
        <KymaModal title="Diagnóstico" >
            <View style={{ width:"100%", height:"90%",marginTop:30}}>

                <Text>Lindo mesmo!!!</Text>

            </View>
        </KymaModal>
    )


}

export default DiagnosticDialog;