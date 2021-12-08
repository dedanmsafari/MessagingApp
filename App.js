import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as usePermanentMarker,
  PermanentMarker_400Regular,
} from "@expo-google-fonts/permanent-marker";
import {
  useFonts as useFraunces,
  Fraunces_500Medium,
  Fraunces_700Bold,
} from "@expo-google-fonts/fraunces";

import {
  connectUser,
  chatClient,
} from "./src/services/streamChat/streamClient";
import {
  OverlayProvider,
  Chat,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { StyleSheet, View } from "react-native";
import { theme } from "./src/infrastructure/theme";
import { Text } from "./src/components/Text/text.component";
import { Spacer } from "./src/components/Spacer/spacer.component";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });
  const [permanentMarkerLoaded] = usePermanentMarker({
    PermanentMarker_400Regular,
  });
  const [frauncesLoaded] = useFraunces({
    Fraunces_500Medium,
    Fraunces_700Bold,
  });

  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  React.useEffect(() => {
    connectUser();
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => {
      chatClient.disconnectUser();
    };
  }, []);

  const channelPress = (channel) => {
    setSelectedChannel(channel);
  };

  if (!latoLoaded || !permanentMarkerLoaded || !frauncesLoaded) {
    return <AppLoading />;
  }

  if (!isReady) {
    return null;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
});

// <View style={styles.container}>
//             <OverlayProvider>
//               <Chat client={chatClient}>
//                 {selectedChannel ? (
//                   <Channel channel={selectedChannel}>
//                     <MessageList />
//                     <MessageInput />
//                     <Text
//                       variant="caption"
//                       onPress={() => setSelectedChannel(null)}
//                     >
//                       {/* {selectedChannel.type} */}Go Back
//                       </Text>
//                       </Channel>
//                     ) : (
//                       <>
//                         <Spacer>
//                           <Text variant="fancy">Please Select a channel</Text>
//                         </Spacer>
//                         <ChannelList onSelect={channelPress} />
//                       </>
//                     )}
//                   </Chat>
//                 </OverlayProvider>
//               </View>
