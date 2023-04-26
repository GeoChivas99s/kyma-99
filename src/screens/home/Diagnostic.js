import { useState, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, ROUTES } from '../../constants';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {  InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import { Audio } from "expo-av";

const Diagnostic = () => {
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState([]);
    const [message, setMessage] = useState("");

    const RECORDING_OPTIONS = {
        android: {
          extension: '.m4a',
          outputFormat: Audio.AndroidOutputFormat.MPEG_4,
          audioEncoder: Audio.AndroidAudioEncoder.AAC,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.wav',
          audioQuality: Audio.IOSAudioQuality.HIGH,
          sampleRate: 44100,
          numberOfChannels: 1,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
        web: {
      
        }
      };
 async function startRecording() {
    const { granted } = await Audio.getPermissionsAsync();

    if (granted) {
      try {
        console.log('Gravando...');

        const { recording } = await Audio.Recording.createAsync(RECORDING_OPTIONS);
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
    // await Audio.setAudioModeAsync({
    //   allowsRecordingIOS: false,
    // });
    const uri = recording.getURI();
    // const { sound, status } = await recording.createNewLoadedSoundAsync();
    const base64File = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem?.EncodingType?.Base64 });
    await FileSystem.deleteAsync(uri);
    
    generateText(base64File)

    let records: any = [...recordings];
    records.push({
      uri: uri,
      //  sound: sound,
      // duration: getDurationFormated(status.durationMillis),
    });

    setRecordings(records);
    // console.log("::::", uri);
  }



  const generateText =  (base64File: string) => {
   
    //     const fileExists = await FileSystem.getInfoAsync(uri)
    //  if(fileExists){
    //   console.log("aaaa", fileExists)
    //  }

    // const { uri } = await FileSystem.getInfoAsync(url);
    
    fetch(
      `https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyAqQmsS_dftAWEeWh4e9NS2NmBKlATz5LE`,
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
        console.log(data.results[0].alternatives[0].transcript);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Foii!!"));

};

useEffect(() => {
  Audio
    .requestPermissionsAsync()
    .then((granted) => {
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
}, []);

function getRecordLines() {
    return recordings.map((recordingLine: any, index) => {
      // increaseSpeed(recordingLine.sound);
      return (
        <View key={index}>
          <Text>
            Gravação {index + 1} -{/* {recordingLine.duration} */}
          </Text>
          <TouchableOpacity
            style={{
              width: 100,
              borderWidth: 2,
              height: 100,
              backgroundColor: "#fe34",
            }}
            onPress={() => {
              //  recordingLine.sound.playAsync();
              generateText(recordingLine.uri);
            }}
          >
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }


    return (
        <View
            style={{
                flex: 1,
            }}>

            <View style={{ height: 120, backgroundColor: COLORS.primary, flex: 1 / 6 }}>
                <Svg
                    height={310}
                    width={Dimensions.get("screen").width}
                    viewBox='0 0 1440 320'

                >
                    <Path
                        fill={COLORS.primary}
                        d='M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,229.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
                    />
                </Svg>

            </View>
            <View style={{ flex: 1, marginTop: -40, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ textTransform: "uppercase", fontSize: 18, color: COLORS.white }}>Diagnóstico</Text>
                <View style={{ marginTop: 110, padding: 10, height: "55%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity
            onPress={recording ? stopRecording : startRecording}
                    
                    style={{
                        borderWidth: 1,
                        padding: 10,
                        height: 150,
                        width: 150,
                        borderRadius: "100%",
                        alignItems: "center"
                        , justifyContent: "center",
                        backgroundColor: COLORS.primary
                    }}>
                        <Icon name="mic" color={COLORS.white} size={80} />
                    </TouchableOpacity>
                </View>
        {getRecordLines()}

            </View>

        </View>
    );
};

export default Diagnostic;
