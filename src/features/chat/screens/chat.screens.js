import React, { useContext } from "react";
import { ChannelList } from "stream-chat-expo";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";
import { StreamChatContext } from "../../../services/streamChat/streamClient.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ChatScreen = ({ navigation }) => {
  const { isReady } = useContext(StreamChatContext);
  const { user } = useContext(AuthenticationContext);
  const channelPress = (channel) => {
    navigation.navigate("PrivateMessages", { channel });
  };
  const filters = {
    members: { $in: [`${user.uid}`] },
  };
  if (!isReady) {
    return <LoadingIndicator />;
  } else {
    return <ChannelList onSelect={channelPress} filters={filters} />;
  }
};
