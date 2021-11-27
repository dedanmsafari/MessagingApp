import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  connectUser,
  chatClient,
} from "./src/services/streamChat/streamClient";

import { StyleSheet, Text, View } from "react-native";

const API_KEY = "mx3bf8x5sf2u";

export default function App() {
  React.useEffect(() => {
    connectUser();

    return () => {
      // cleanup
      chatClient.disconnectUser();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
