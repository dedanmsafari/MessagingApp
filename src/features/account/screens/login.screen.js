import React, { useState } from "react";
import {
  AccountBackground,
  AccountCover,
  FormInput,
  AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Text/text.component";
export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="title">login</Text>
      <Spacer size="large" />
      <FormInput
        label="Email"
        value={email}
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(email) => setEmail(email)}
      />
      <Spacer size="large" />

      <FormInput
        label="Password"
        value={password}
        textContentType="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Spacer size="large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
