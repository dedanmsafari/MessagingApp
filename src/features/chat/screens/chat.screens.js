import React, { useContext } from "react";
import { ChannelList } from "stream-chat-expo";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";
import { StreamChatContext } from "../../../services/streamChat/streamClient.context";

export const ChatScreen = ({ navigation }) => {
  const { isReady } = useContext(StreamChatContext);

  const channelPress = (channel) => {
    navigation.navigate("PrivateMessages", { channel });
  };
  const filters = {
    members: { $in: ["YNLI3j2rZRfdn4NAdN5WOTZ82Dt1"] },
  };
  if (!isReady) {
    return <LoadingIndicator />;
  } else {
    return <ChannelList onSelect={channelPress} filters={filters} />;
  }
};
