import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, ROUTES } from "../../constants";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

import * as Speech from "expo-speech";

const TextGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const API_KEY = "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";

  function handleFetchText() {
    setIsLoading(true);
    const prompt = `Gere um texto com 8 parágrafros em português para eu poder exercitar a minha leitura , e garanta que o texto gerado não seja igual ao anterior `;
    fetch(
      "https://api.openai.com/v1/engines/text-davinci-003-playground/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          temperature: 0.22,
          max_tokens: 500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data?.choices[0]?.text);
      })
      .catch((err) => {Alert.alert("Erro", "Não foi possível Gerar o texto")
        console.log(err)
    })
      .finally(() => setIsLoading(false));
  }
  const speak = () => {
    stopSpeak();
    Speech.speak(data, {
      language: "pt-PT",
      pitch: 1,
      rate: 1,
    });
  };
  const stopSpeak = () => {
    Speech.stop();
  };
  const pauseAndResumeSpeak = async () => {
    const isSpeaking = await Speech.isSpeakingAsync();
    isSpeaking ? Speech.pause() : Speech.resume();
  };
  useEffect(() => {
    (async function () {
      handleFetchText();
    })();
    //  stopSpeak()
    return () => {
      stopSpeak();
    };
  }, []);

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
          height={300}
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
        style={{ flex: 1, marginTop: -40, paddingLeft: 10, paddingRight: 10 }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 18,
            color: COLORS.white,
          }}
        >
          Leitura Expressiva
        </Text>
        <View
          style={{
            marginTop: 60,
            // borderWidth: 2,
            // padding: 10,
            height: "80%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1 / 9,
              //   borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                width: 250,
                padding: 10,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
              }}
              onPress={handleFetchText}
              disabled={isLoading}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                Aperte para gerar um texto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                width: 50,
                padding: 10,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
                alignItems: "center",
              }}
              onPress={speak}
              disabled={isLoading}
            >
              <Text>
                <Icon name="play" color="white" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ flex: 3, borderWidth: 1, borderRadius: 10, padding: 10  }}
            
          >
            {isLoading ? (
              <ActivityIndicator color={COLORS.primary} size="large" />
            ) : (
              <Text>{data}</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TextGenerator;
