import React, { Children, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from "react-native-modal";

function KymaModal({ children, isOpen, title, handleClose }) {
    return (
      <View>
        <Modal isVisible={isOpen}
          style={{ paddingTop: 25, paddingBottom: 10 }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: 15 }}>
            <TouchableOpacity onPress={handleClose} style={{ alignSelf: "flex-end", position: "absolute", top: 5, right: 10 }}>
              <Icon name='close' size={40} color={COLORS.gray} />
            </TouchableOpacity>
            <View style={{
              borderBottomWidth: 1, width: "100%",
              borderColor: COLORS.grayLight, position: "absolute",
              top: 30, alignItems: "center", padding: 5
            }}><Text style={{ textTransform: "uppercase" }}>{title}</Text></View>
            {
              children
            }
          </View>
        </Modal>
      </View>
    );
  }
  export default KymaModal;