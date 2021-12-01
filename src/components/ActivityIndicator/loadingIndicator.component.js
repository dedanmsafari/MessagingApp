import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoadingIndicator = () => {
  return (
    //Testing the color Indigo
    <Colors.Indigo400>
      <ActivityIndicator animating={true} size="large" />
    </Colors.Indigo400>
  );
};
