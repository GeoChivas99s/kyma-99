import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";
import { Audio } from "expo-av";
import Svg, { Path } from "react-native-svg";
import * as FileSystem from "expo-file-system";
import { COLORS, TEXT } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useCallback, useEffect, useState } from "react";

import DiagnosticDialog from "../dialogs/diagnosticDialog";
import AgoraUIKit from "agora-rn-uikit";

const Chat = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: "fa42e5f4ad2b4d71b73cbbddb3042f54",
    channel: "test",
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };

  return (
    // <View
    //   style={{
    //     flex: 1,
    //   }}
    // >
    //   <View
    //     style={{ height: 120, backgroundColor: COLORS.primary, flex: 1 / 6 }}
    //   >
    //     <Svg
    //       height={310}
    //       width={Dimensions.get("screen").width}
    //       viewBox="0 0 1440 320"
    //     >
    //       <Path
    //         fill={COLORS.primary}
    //         d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,229.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    //       />
    //     </Svg>
    //   </View>
    //   <View
    //     style={{
    //       flex: 1,
    //       marginTop: -40,
    //       paddingLeft: 20,
    //       paddingRight: 20,
    //       //borderWidth: 1,
    //       // padding: 5,,
    //     }}
    //   >
    //     <Text
    //       style={{
    //         textTransform: "uppercase",
    //         fontSize: 18,
    //         color: COLORS.white,
    //       }}
    //     >
    //       Diagnóstico
    //     </Text>
    <View
      style={{
        marginTop: 10,
        borderWidth: 3,
        padding: 10,
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 100,
      }}
    >
      {videoCall ? (
        <AgoraUIKit
          {...{ borderWidth: 3, backgroundColor: "red" }}
          connectionData={connectionData}
          rtcCallbacks={rtcCallbacks}
        />
      ) : (
        <TouchableOpacity onPress={() => setVideoCall(true)}>
          <Text>Entrar na Chamada</Text>
        </TouchableOpacity>
      )}
    </View>
    //   </View>
    //   <DiagnosticDialog />
    // </View>
  );
};

export default Chat;
