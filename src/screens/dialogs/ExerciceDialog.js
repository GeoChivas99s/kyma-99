import React, { Children, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import KymaModal from '../../components/KymaModal';


const ExerciceDialog= ({handleClose , isOpen , title , data }) => {


const [isOpened , setIsOpened] = useState(isOpen);
 console.log("data", data)

return (
    <KymaModal isOpen={isOpened}  handleClose={()=> setIsOpened(false)} title={title} >

        <Text>slsls</Text>
    </KymaModal>
)


}

export default ExerciceDialog;