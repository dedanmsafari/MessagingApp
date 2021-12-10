import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoadingIndicator = () => {
  return (
    <ActivityIndicator animating={true} size="large" color={Colors.red800} />
  );
};
