import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};
