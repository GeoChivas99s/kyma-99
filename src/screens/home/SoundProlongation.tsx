import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import Svg, { Path } from "react-native-svg";
import { COLORS, TEXT } from "../../constants";
import React, { useCallback, useEffect, useState } from "react";

const SoundProlongation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Obnubilate",
    "Astracã",
    "Impaludismo",
    "Zodíaco",
    "Quimera",
    "Ultrajante",
    "Anfíbio",
    "Estupefato",
    "Xilogravura",
    "Escamandro",
    "Esfinge",
    "Galáxia",
    "Aporia",
    "Genuflexório",
    "Ígneo",
    "Libélula",
    "Nefelibata",
    "Oscilação",
    "Plêiade",
    "Quetzal",
    "Rubicundo",
    "Sublime",
    "Telescópio",
    "Êmbolo",
    "Abstruso",
    "Brio",
    "Ceticismo",
    "Dogmático",
    "Efêmero",
    "Fosforescente",
    "Gnomônico",
    "Heterogêneo",
    "Inefável",
    "Jubiloso",
    "Lânguido",
    "Mnemônico",
    "Nihilista",
    "Ocultismo",
    "Paradoxal",
    "Quimérico",
    "Rubicundo",
    "Sintético",
    "Tautologia",
    "Hipopótamo",
    "Paralelepípedo",
    "Extravagante",
    "Floccinaucinihilipilificação",
    "Pneumoultramicroscopicossilicovulcanoconiótico",
  ];

  const speakWord = () => {
    Speech.speak(words[currentWordIndex], {
      language: "pt-PT",
      pitch: 1,
      rate: 0.7,
    });
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) =>
      prevIndex < words.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{ height: 120, backgroundColor: COLORS.primary, flex: 1 / 6 }}
      >
        <Svg
          height={310}
          width={Dimensions.get("screen").width}
          viewBox="0 0 1440 320"
        >
          <Path
            fill={COLORS.primary}
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,229.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: -40,
          paddingLeft: 20,
          paddingRight: 20,
          //borderWidth: 1,
          // padding: 5,,
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 18,
            color: COLORS.white,
          }}
        >
          Prolongamento de som
        </Text>
        <View
          style={{
            marginTop: 10,
            // borderWidth: 3,
            padding: 10,
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
            //paddingRight: 100,
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Terapia de Prolongamento do Som</Text>
            <Text style={styles.word}>{words[currentWordIndex]}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={speakWord}>
                <Text style={styles.buttonText}>Pronunciar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handlePreviousWord}
              >
                <Text style={styles.buttonText}>Recuar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNextWord}>
                <Text style={styles.buttonText}>Avançar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  word: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SoundProlongation;
