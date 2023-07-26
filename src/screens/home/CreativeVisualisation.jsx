
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  StyleSheet
} from "react-native";
import { Audio } from "expo-av";
import Svg, { Path } from "react-native-svg";
import * as FileSystem from "expo-file-system";
import { COLORS, TEXT } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useCallback, useEffect, useState } from "react";

const CreativeVisualisation = () => {
  const scenes = [
    "Imagine-se em uma praia deserta, com areia branca e águas cristalinas. Sinta o calor do sol em sua pele e ouça o som suave das ondas do mar.",
    "Visualize-se caminhando em uma floresta exuberante, cercado por árvores altas e uma suave luz do sol filtrando pelas folhas. Sinta o cheiro do ar fresco e ouça os pássaros cantando.",
    "Transporte-se para uma montanha majestosa, com picos cobertos de neve e ar puro e refrescante. Sinta a brisa gelada em seu rosto e aprecie a vista deslumbrante ao seu redor.",
    "Imagine-se em um campo de flores coloridas, com um aroma suave no ar. Sinta a grama macia sob seus pés enquanto você caminha entre as flores.",
    "Visualize-se em um jardim tranquilo, com borboletas voando ao seu redor e o som suave de um riacho próximo. Sente-se em um banco e aproveite a serenidade do local.",
    "Transporte-se para um céu estrelado à noite, com estrelas brilhantes e uma lua cheia iluminando a paisagem. Deite-se na grama e aprecie o espetáculo celeste.",
    "Imagine-se em um castelo antigo, com grandes salões e corredores misteriosos. Explore os diversos cômodos e imagine a história que eles guardam.",
    "Visualize-se em uma ilha tropical, com palmeiras balançando ao vento e águas cristalinas. Relaxe em uma rede e aproveite a tranquilidade do lugar.",
    "Transporte-se para um cenário de conto de fadas, com castelos encantados e criaturas mágicas. Voe em um tapete mágico e descubra um mundo de fantasia.",
  ];

  const [isVisualizationStarted, setIsVisualizationStarted] = useState(false);
  const [currentScene, setCurrentScene] = useState("");
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    if (isVisualizationStarted) {
      setCurrentScene(scenes[sceneIndex]);
      const timer = setTimeout(() => {
        if (sceneIndex < scenes.length - 1) {
          setSceneIndex(prevIndex => prevIndex + 1);
        } else {
          stopVisualization();
        }
      }, 10000); // Aumentamos o tempo de visualização para 10 segundos
      return () => clearTimeout(timer);
    }
  }, [isVisualizationStarted, sceneIndex]);

  const startVisualization = () => {
    setIsVisualizationStarted(true);
    setSceneIndex(0);
  };

  const stopVisualization = () => {
    setIsVisualizationStarted(false);
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
          Contagem Silábica
        </Text>
    <View
      style={{
        marginTop: 10,
        padding: 10,
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 100,
      }}
    >
<View style={styles.container}>
      <Text style={styles.title}>Terapia de Visualização Criativa</Text>
      {!isVisualizationStarted ? (
        <TouchableOpacity style={styles.button} onPress={startVisualization}>
          <Text style={styles.buttonText}>Iniciar Visualização</Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={styles.instruction}>
            Encontre um local tranquilo e confortável onde você possa relaxar.
          </Text>
          <Text style={styles.instruction}>
            Feche os olhos e comece a respirar profundamente e calmamente.
          </Text>
          <Text style={styles.scene}>{currentScene}</Text>
          <TouchableOpacity style={styles.button} onPress={stopVisualization}>
            <Text style={styles.buttonText}>Encerrar Visualização</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </View>
      </View>
    {/* //   <DiagnosticDialog /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
   // backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007AFF",
  },
  instruction: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#333333",
  },
  scene: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#333333",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreativeVisualisation;
