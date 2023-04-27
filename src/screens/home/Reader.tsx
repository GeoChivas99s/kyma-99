import {
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, ROUTES } from "../../constants";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";
import * as Speech from "expo-speech";

const Reader = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [words, setWords] = useState<Record<string, string>>({});

  const [word, setWord] = useState<string>("");
  const addChip = (name: string, id: string) => {
    if (name) {
      setWords((prev) => ({ ...prev, [id]: name }));
    }
  };

  const removeChips = (id: string) => {
    const newFilters = { ...words };
    delete newFilters[id];
    setWords(newFilters);
  };

  const generateId = () =>
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  console.log(words);
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
          Leitura
        </Text>
        <View
          style={{
            // borderWidth: 1,

            marginTop: 70,
            //   borderWidth: 3,
            padding: 5,
            height: "80%",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              value={word}
              onChangeText={(text: string) => {
                // console.log(e);
                setWord(text);
              }}
              placeholder="Adicione uma palavra ..."
              style={{
                borderWidth: 1,
                width: 280,
                padding: 18,
                borderRadius: 10,
                borderColor: COLORS.gray,
              }}
              placeholderTextColor={COLORS.gray}
            />
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 10,
                backgroundColor: COLORS.primary,
              }}
              onPress={() =>{ addChip(word, generateId());
              setWord("")
              }}
            >
              <Icon name="add-circle" size={40} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <ScrollView
          horizontal
            style={{
            //  height: "100%",
              flexDirection: "column",
              flexWrap: "wrap",
              marginTop: 10,
            }}
          >
            {words &&
              Object.keys(words).reverse().map((item) => {
                return (
                  <Chip
                    text={words[item]}
                    handleCLick={() => removeChips(item)}
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
      
    </View>
  );
};

export default Reader;

const Chip = ({
  text,
  handleCLick,
}: {
  text: string;
  handleCLick: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        padding: 10,
        justifyContent: "space-between",
        borderRadius: 10,
        margin: 5,
      }}
    >
      <Text style={{ fontSize: 18, color: "white", marginRight: 15 }}>
        {text}
      </Text>
      <TouchableOpacity onPress={handleCLick}>
        <Icon name="close" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};
