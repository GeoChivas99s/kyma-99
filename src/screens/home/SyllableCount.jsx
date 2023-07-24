
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import * as Speech from 'expo-speech';
  import Svg, { Path } from "react-native-svg";
  import { COLORS, TEXT } from "../../constants";
  import React, { useCallback, useEffect, useState , useRef} from "react";
  
  const SyllableCount = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [wordList, setWordList] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isUserInputEnabled, setIsUserInputEnabled] = useState(false);
  
    const words = [
      'casa',
      'maçã',
      'computador',
      'aventura',
      'elefante',
      'floresta',
      'jardim',
      'bola',
      // Add more words as needed
    ];
  
    const startTherapy = async () => {
      setIsPlaying(true);
      setCurrentWordIndex(0);
      setUserInput([]);
      setIsUserInputEnabled(false);
      await playWordList();
      setIsUserInputEnabled(true);
    };
  
    const stopTherapy = () => {
      setIsPlaying(false);
      setCurrentWordIndex(0);
      setUserInput([]);
      setIsUserInputEnabled(false);
      Speech.stop();
    };
  
    const playWordList = async () => {
      for (const word of wordList) {
        await Speech.speak(word, {
          onStart: () => {
            setIsUserInputEnabled(false);
          },
          onDone: () => {
            setIsUserInputEnabled(true);
          },
        });
        await wait(1000); // Adjust the time between words if needed
      }
    };
  
    const handleUserInput = (word) => {
      if (isUserInputEnabled) {
        setUserInput(prevInput => [...prevInput, word]);
        if (currentWordIndex < wordList.length - 1) {
          setCurrentWordIndex(prevIndex => prevIndex + 1);
        } else {
          setIsUserInputEnabled(false);
          checkUserInput();
        }
      }
    };
  
    const checkUserInput = () => {
      const isCorrect = userInput.every((value, index) => value === wordList[index]);
      if (isCorrect) {
        // The user got it right, you can show a success message or proceed to the next level
        console.log('Correct!');
      } else {
        // The user got it wrong, you can show an error message or repeat the sequence
        console.log('Wrong!');
      }
    };
  
    const wait = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
  
    useEffect(() => {
      if (isPlaying) {
        const randomWords = generateRandomWords();
        setWordList(randomWords);
      }
    }, [isPlaying]);
  
    const generateRandomWords = () => {
      const shuffledWords = words.sort(() => Math.random() - 0.5);
      return shuffledWords.slice(0, 5); // You can adjust the length of the word list here
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
 <Text style={styles.title}>Terapia de Memória Auditiva</Text>
      {!isPlaying && (
        <TouchableOpacity style={styles.button} onPress={startTherapy}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
      )}
      {isPlaying && (
        <TouchableOpacity style={styles.button} onPress={stopTherapy}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
      )}
      {isPlaying && isUserInputEnabled && (
        <Text style={styles.instructions}>Repita as palavras:</Text>
      )}
      {isPlaying && isUserInputEnabled && (
        <View style={styles.wordButtonsContainer}>
          {wordList.map((word, index) => (
            <TouchableOpacity
              key={index}
              style={styles.wordButton}
              onPress={() => handleUserInput(word)}
            >
              <Text style={styles.wordButtonText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {isPlaying && (
        <Text style={styles.currentWord}>
          Palavra Atual: {wordList[currentWordIndex]}
        </Text>
      )}
      </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    instructions: {
      fontSize: 16,
      marginTop: 10,
    },
    wordButtonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 10,
    },
    wordButton: {
      backgroundColor: '#CCCCCC',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      margin: 5,
    },
    wordButtonText: {
      fontSize: 16,
    },
    currentWord: {
      fontSize: 16,
      marginTop: 10,
    },
  });
  
  export default SyllableCount;
  