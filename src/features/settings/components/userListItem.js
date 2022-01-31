import { Text } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { Image } from "../../../components/Image/image.component";
const ListView = styled.View`
  flex: 1;
  flex-direction: row;
  alignItems: center;
  margin: 10px;
`;

export const UserListItem = ({ user }) => {
  return (
    <ListView>
      <Image source={{ uri: user.image }} />
      <Text>{user.name}</Text>
    </ListView>
  );
};
