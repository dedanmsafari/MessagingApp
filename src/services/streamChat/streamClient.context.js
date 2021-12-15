import React, { createContext, useContext, useEffect } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import { connectUser, chatClient } from "./streamClient";
export const StreamChatContext = createContext();

export const StreamChatProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    connectUser(user);
    setTimeout(() => setIsReady(true), 3000);

    return () => {
      chatClient.disconnectUser(user);
    };
  }, []);

  return (
    <StreamChatContext.Provider value={{ isReady }}>
      {children}
    </StreamChatContext.Provider>
  );
};
