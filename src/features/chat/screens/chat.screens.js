import React, { useState, useContext } from "react";
import { Text } from "../../../components/Text/text.component";
import {
  OverlayProvider,
  Chat,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { chatClient } from "../../../services/streamChat/streamClient";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";
import { StreamChatContext } from "../../../services/streamChat/streamClient.context";

export const ChatScreen = () => {
  const { isReady } = useContext(StreamChatContext);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const channelPress = (channel) => {
    setSelectedChannel(channel);
  };

  if (!isReady) {
    return <LoadingIndicator />;
  } else {
    return (
      <OverlayProvider>
        <Chat client={chatClient}>
          {selectedChannel ? (
            <Channel channel={selectedChannel}>
              <MessageList />
              <Text variant="caption" onPress={() => setSelectedChannel(null)}>
             Go Back
              </Text>
              <MessageInput />
            </Channel>
          ) : (
            <ChannelList onSelect={channelPress} />
          )}
        </Chat>
      </OverlayProvider>
    );
  }
};
