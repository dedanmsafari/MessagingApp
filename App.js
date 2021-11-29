import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { StyleSheet, Text, View } from "react-native";

export default function App() {
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

  if (!isReady) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <OverlayProvider>
          <Chat client={chatClient}>
            {selectedChannel ? (
              <Channel channel={selectedChannel}>
                <MessageList />
                <MessageInput />
                <Text onPress={() => setSelectedChannel(null)}>
                  {/* {selectedChannel.type} */}Go Back
                </Text>
              </Channel>
            ) : (
              <ChannelList onSelect={channelPress} />
            )}
          </Chat>
        </OverlayProvider>
      </View>
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
