import React from "react";
import {
  AccountBackground,
  AccountCover,
  AnimationWrapper,
  AuthButton,
} from "../components/account.styles";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Text/text.component";
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          source={require("../../../../assets/Enjoy.json")}
          autoPlay
          // loop
          resizeMode="contain"
        />
      </AnimationWrapper>
      <Text variant="fancy">Enjoy!</Text>
      <Spacer size="xlarge" />
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large" />
      <AuthButton
        icon="email"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
    </AccountBackground>
  );
};
