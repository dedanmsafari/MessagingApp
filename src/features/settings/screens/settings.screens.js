import React, { useContext } from "react";
import { Text } from "../../../components/Text/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton } from "../../account/components/account.styles";

export const SettingsScreen = () => {
  const { logout } = useContext(AuthenticationContext);
  return <AuthButton onPress={() => logout()}>log Out</AuthButton>;
};
