import React, { useState, useContext } from "react";
import { Text } from "../../../components/Text/text.component";
import {
  connectUser,
  chatClient,
} from "../../../services/streamChat/streamClient";
import {
  OverlayProvider,
  Chat,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";

export const ChatScreen = () => {
  const { user, isReady } = useContext(AuthenticationContext);

  // const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  React.useEffect(() => {
    // connectUser(user);
    // setTimeout(() => {
    //   setIsReady(true);
    // }, 2000);

    return () => {
      chatClient.disconnectUser(user);
    };
  }, []);

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
                {/* {selectedChannel.type} */}Go Back
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
