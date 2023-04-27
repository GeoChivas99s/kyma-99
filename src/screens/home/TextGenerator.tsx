import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { COLORS, ROUTES } from "../../constants";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TextGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const API_KEY = "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";
  const API_URL =
    "https://api.openai.com/v1/engines/text-davinci-003-playground/completions";

  function handleFetchTags() {
    setIsLoading(true);
    const prompt = `Gere textos bons para eu poder treinar a minha leitura`;
    fetch(
      "https://api.openai.com/v1/engines/text-davinci-003-playground/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt,
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
        console.log(data.choices[0].text);
        setData(data.choices[0].text);
      })
      .catch(() => Alert.alert("Erro", "Não foi possível buscar as tags."))
      .finally(() => setIsLoading(false));
  }

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
          Gerador de Texto
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
              onPress={handleFetchTags}
            >
              <Text style={{ color: "white", fontSize: 18 }}>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  "Aperte para gerar um texto"
                )}
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
            >
              <Icon name="play" color="white" size={20} />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ flex: 3, borderWidth: 1, borderRadius: 10, padding: 10 }}
          >
            <Text>{data}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TextGenerator;
