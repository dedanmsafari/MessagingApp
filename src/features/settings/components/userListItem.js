import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import React, { useContext } from "react";
import { Image } from "../../../components/Image/image.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
const ListView = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  alignItems: center;
  margin: 10px;
`;

export const UserListItem = ({ chatuser, chatClient }) => {
  const { user } = useContext(AuthenticationContext);
  const navigation = useNavigation();

  const onPress = async () => {
    if (!chatuser.id || !user.uid) {
      return;
    }
    const channel = chatClient.channel("messaging", {
      members: [chatuser.id, user.uid],
    });

    await channel.watch();
    navigation.navigate('PrivateMessages', { channel });
  };

  return (
    <ListView onPress={onPress}>
      <Image source={{ uri: chatuser.image }} />
      <Text>{chatuser.name}</Text>
    </ListView>
  );
};
