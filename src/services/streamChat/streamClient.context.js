import React, { createContext, useContext, useEffect } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import { connectUser, chatClient } from "./streamClient";
export const StreamChatContext = createContext();

export const StreamChatProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    //Async call to connect user

    (async () => {
      await connectUser(user);
    })();

    //setting isReady to true
    setIsReady(true);

    //clean up
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
