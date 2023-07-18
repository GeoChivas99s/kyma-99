
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';
  import Svg, { Path } from "react-native-svg";
  import { COLORS, TEXT } from "../../constants";
  import React, { useCallback, useEffect, useState } from "react";
  
  const SyllableCount = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [syllablesCount, setSyllablesCount] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState(0);
  
    const phrases = [
      "Olá, como vai você?",
      "Hoje é um belo dia",
      "Vamos fazer um passeio",
      "Conte quantas sílabas têm",
      "Isso é muito divertido",
    ];
  
    const startTherapy = async () => {
      setIsPlaying(true);
      setCurrentPhrase(0);
      await handlePlay();
    };
  
    const stopTherapy = () => {
      setIsPlaying(false);
      setCurrentPhrase(0);
      setSyllablesCount(0);
      Speech.stop();
    };
  
    const handlePlay = async () => {
      if (currentPhrase < phrases.length) {
        const phrase = phrases[currentPhrase];
        const count = countSyllables(phrase);
        setSyllablesCount(count);
  
        await new Promise<void>((resolve) => {
          Speech.speak(phrase, {
            onDone: () => {
              setCurrentPhrase((prevPhrase) => prevPhrase + 1);
              resolve();
            },
            onError: () => {
              stopTherapy();
              resolve();
            },
          });
        });
  
        await handlePlay();
      } else {
        setIsPlaying(false);
        setCurrentPhrase(0);
        setSyllablesCount(0);
      }
    };
  
    const countSyllables = (text: string) => {
      const words = text.split(" ");
      let count = 0;
  
      words.forEach((word) => {
        const regex = /[aeiou]/gi;
        const vowels = word.match(regex);
        count += vowels ? vowels.length : 0;
      });
  
      return count;
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
            SyllableCount
          </Text>
      <View
        style={{
          marginTop: 10,
          borderWidth: 3,
          padding: 10,
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
          //paddingRight: 100,
        }}
      >
    <Text style={styles.title}>Terapia de Contagem Silábica</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (isPlaying ? stopTherapy() : startTherapy())}
      >
        <Text style={styles.buttonText}>{isPlaying ? "Parar" : "Iniciar"}</Text>
      </TouchableOpacity>
      {isPlaying && (
        <Text style={styles.countText}>Conte as sílabas: {syllablesCount}</Text>
      )}
      </View>
        </View>
      </View>
    );
  };
  
  const styles = {
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#007AFF",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 16,
    },
    countText: {
      fontSize: 18,
      marginTop: 10,
    },
  };
  export default SyllableCount;
  