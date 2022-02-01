import { StreamChat } from "stream-chat";

const API_KEY = "mx3bf8x5sf2u";

export const chatClient = StreamChat.getInstance(API_KEY);

export const connectUser = async (user) => {
  await chatClient.connectUser(
    {
      id: user.uid,
      name: user.email,
      image: "https://picsum.photos/200/300",
    },
    chatClient.devToken(user.uid)
  );

  // const channel = chatClient.channel("messaging", "Dan", {
  //   name: "Dan",
  // });

  // await channel.watch();
};
