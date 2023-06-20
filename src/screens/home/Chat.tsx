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

  import DiagnosticDialog from "../dialogs/diagnosticDialog";
  import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'


const ios = [];






  const Chat = () => {
  
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
            Diagnóstico
          </Text>
          <View
            style={{
              marginTop: 10,
              //   borderWidth: 3,
              padding: 10,
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <ZegoUIKitPrebuiltCall
                appID={1619672785}
                appSign={"f8a2a0277ab344d66d3e72fef13ecd53f575f3d478f930eb0c17bd52c325f8b7"}
                userID={"Chivas"} // userID can be something like a phone number or the user id on your own user system. 
                userName={"userName"}
                callID={"_11"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { },
                    onHangUp: () => { },
                }}
            />
      
          </View>
        </View>
        <DiagnosticDialog />
      </View>
    );
  };
  
  export default Chat;
  