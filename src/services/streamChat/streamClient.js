
import { StreamChat } from "stream-chat";

const API_KEY = "mx3bf8x5sf2u";

const chatClient = StreamChat.getInstance(API_KEY);

export const connectUser = async () => {
  await chatClient.connectUser(
    {
      id: "dedan_eleven",
      name: "Dedan",
      image: "https://cdn.streamlabs.com/slobs/user-1.png",
    },
    chatClient.devToken("dedan_eleven")
  );
};

