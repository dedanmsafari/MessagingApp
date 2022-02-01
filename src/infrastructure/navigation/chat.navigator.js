import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { ChatScreen } from "../../features/chat/screens/chat.screens";
import { PrivateMessagesScreens } from "../../features/chat/screens/privatemessages.screens";

const ChatStack = createStackNavigator();

export const ChatNavigator = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
        headerMode: "screen",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        presentation: "modal",
        ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <ChatStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarBadge: 3,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <ChatStack.Screen
        name="PrivateMessages"
        component={PrivateMessagesScreens}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </ChatStack.Navigator>
  );
};
