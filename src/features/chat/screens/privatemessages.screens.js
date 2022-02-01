import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text } from "../../../components/Text/text.component";
import { Channel, MessageList, MessageInput } from "stream-chat-expo";

export const PrivateMessagesScreens = () => {
  const route = useRoute();
  const channel = route.params?.channel;

  if (!channel) {
    return <Text variant="error">No channel selected</Text>;
  }

  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
};
