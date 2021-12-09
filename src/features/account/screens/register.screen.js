import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  FormInput,
  AuthButton,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Text/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { register, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="title">Register</Text>
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
      <FormInput
        label="Repeat Password"
        value={repeatPassword}
        textContentType="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
      />
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      <Spacer size="large" />
      {!isLoading ? (
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => register(email, password, repeatPassword)}
        >
          Register
        </AuthButton>
      ) : (
        <LoadingIndicator />
      )}
      <Spacer size="large" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
