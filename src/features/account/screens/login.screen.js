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
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useContext(AuthenticationContext);

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
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      <Spacer size="large" />
      {!isLoading ? (
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => login(email, password)}
        >
          Login
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
