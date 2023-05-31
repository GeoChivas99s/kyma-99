import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
  } from "react-native";
  import { Audio } from "expo-av";
  import Svg, { Path } from "react-native-svg";
  import * as FileSystem from "expo-file-system";
  import { COLORS, TEXT } from "../../constants";
  import Icon from "react-native-vector-icons/Ionicons";
  import React, { useCallback, useEffect, useState } from "react";
  import { InterruptionModeIOS, InterruptionModeAndroid } from "expo-av";
  import { analyzeTranscription } from "../../utils";
  import Toast from "react-native-toast-message";
  import DiagnosticDialog from "../dialogs/diagnosticDialog";
  import { getRandomNumber } from "../../utils/getRandomNumber";
  import useData from "../../hooks/useData";
  const Breathing = () => {
  
    const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const requestAudioPermission = async () => {
    const { granted } = await Audio.getPermissionsAsync();
    if (!granted) {
      console.log('Permission not granted');
      return false;
    }
    return true;
  };

  const loadAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: InterruptionModeIOS.DoNotMix,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      });
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require('../../assets/Audio.mp3'),
        { shouldPlay: false }
      );
      setSound(audioSound);
    } catch (error) {
      console.log('Error loading audio: ', error);
    }
  };

  useEffect(() => {
    requestAudioPermission();
    loadAudio();
  }, []);

  const playAudio = async () => {
    try {
      if (sound) {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error playing audio: ', error);
    }
  };

  const pauseAudio = async () => {
    try {
      if (sound) {
        await sound.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error pausing audio: ', error);
    }
  };

  const stopAudio = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        setIsPlaying(false);
        setTimeRemaining(0);
      }
    } catch (error) {
      console.log('Error stopping audio: ', error);
    }
  };

  const restartAudio = () => {
    stopAudio();
    playAudio();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const startTimer = () => {
    setTimeRemaining(60); // Defina o tempo desejado para o exercício (em segundos)
    playAudio();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 18,
              color: COLORS.white,
            }}
          >
            Respiração Diafragmática 
          </Text>
          <View
            style={{
            padding: 10,
            height: "80%",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            }}
          >
       <View>
      <Text style={styles.title}>Terapia de Respiração Diafragmática</Text>
      <Text style={styles.instructions}>
        Sente-se em uma posição confortável e relaxe. Coloque uma mão no peito e outra no abdômen.
        Feche os olhos e inspire profundamente pelo nariz, sentindo o abdômen se expandir.
        Em seguida, expire lentamente pela boca, esvaziando completamente o ar dos pulmões.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (isPlaying ? pauseAudio() : startTimer())}
      >
        <Text style={styles.buttonText}>{isPlaying ? 'Pausar' : 'Iniciar'}</Text>
      </TouchableOpacity>
      {isPlaying && (
        <TouchableOpacity style={styles.button} onPress={stopAudio}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
      )}
      {!isPlaying && timeRemaining > 0 && (
        <TouchableOpacity style={styles.button} onPress={restartAudio}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      )}
      {isPlaying && (
        <Text style={styles.timerText}>Tempo restante: {formatTime(timeRemaining)}</Text>
      )}
    </View>
          </View>
        </View>
      </View>
    );
  };
  const styles = {
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    instructions: {
      fontSize: 16,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    timerText: {
      fontSize: 18,
      marginTop: 10,
    },
  };
  export default Breathing;
  