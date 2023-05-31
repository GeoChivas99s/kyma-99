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
    const [message, setMessage] = useState("");
    const [recording, setRecording] = useState<any>();
    const [recordings, setRecordings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { openModal, setOpenModal, setData } = useData();
    const RECORDING_OPTIONS = {
      android: {
        extension: ".m4a",
        outputFormat: Audio.AndroidOutputFormat.MPEG_4,
        audioEncoder: Audio.AndroidAudioEncoder.AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
      },
      ios: {
        extension: ".wav",
        audioQuality: Audio.IOSAudioQuality.HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
      },
      web: {},
    };
    async function startRecording() {
      const { granted } = await Audio.getPermissionsAsync();
  
      if (granted) {
        try {
          console.log("Gravando...");
  
          const { recording } = await Audio.Recording.createAsync(
            RECORDING_OPTIONS
          );
          setRecording(recording);
        } catch (error) {
          console.log(error);
        }
      }
    }
    async function stopRecording() {
      console.log("Stopping recording..");
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      // const { sound, status } = await recording.createNewLoadedSoundAsync();
      const base64File = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem?.EncodingType?.Base64,
      });
      await FileSystem.deleteAsync(uri);
  
      //generateText(base64File);
  
      let records: any = [...recordings];
      records.push({
        uri: base64File,
      });
  
      setRecordings(records);
    }
    // 1f8caa5424bf47d09b2bcf4ef36b7f3d
    const generateText = async (base64File: string) => {
      // console.log(base64File)
      setIsLoading(true);
      fetch(
        `https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBTqE8gOnEqle3RP_YnWlIGKMk5reIGzuQ`,
        {
          method: "POST",
          body: JSON.stringify({
            config: {
              languageCode: "pt-BR",
              encoding: "LINEAR16",
              sampleRateHertz: 41000,
            },
            audio: {
              content: base64File,
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.results[0].alternatives[0].transcript);
          console.log(data.results[0].alternatives[0].transcript);
          console.log(
            analyzeTranscription(data.results[0].alternatives[0].transcript)
          );
          setData(analyzeTranscription(data.results[0].alternatives[0].transcript))
        })
        .catch((error) => {
          console.log(error);
          setMessage("");
          // Toast.show({
          //   type: "error",
          //   text1: "Erro ao realizar a transcrição do aúdio!",
          // });
        })
        .finally(() => {
          // console.log("Foii!!");
          setIsLoading(false);
        });
    }
    useCallback(() => { }, [message]);
  
    useEffect(() => {
      if (message) {
        setOpenModal(true);
        setRecording(null);
        setRecordings([]);
      }
    }, [message]);
  
    useEffect(() => {
      Audio.requestPermissionsAsync().then((granted) => {
        if (granted) {
          Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: InterruptionModeIOS.DoNotMix,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
            playThroughEarpieceAndroid: true,
          });
        }
      });
      //  setOpenModal(true);
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
         
          </View>
        </View>
      </View>
    );
  };
  
  export default Breathing;
  