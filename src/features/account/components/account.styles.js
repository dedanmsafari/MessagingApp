import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/enjoy3.jpg"),
  // imageStyle: {
  //   resizeMode: "stretch",
  // },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;
export const AuthButton = styled(Button).attrs({
  color: colors.brand.tertiary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
`;

export const FormInput = styled(TextInput).attrs({
  mode: "flat",
})`
  width: 300px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 80%;
  height: 10%;
  position: absolute;
  top: 200px;
  padding-left: ${(props) => props.theme.space[2]};
`;
