import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { ChatNavigator } from "./chat.navigator";
import { UsersScreen } from "../../features/settings/screens/users.screens";
import { SafeArea } from "../../utils/safeArea.util.component";
import { StreamChatProvider } from "../../services/streamChat/streamClient.context";
import { chatClient } from "../../services/streamChat/streamClient";
import { OverlayProvider, Chat } from "stream-chat-expo";
const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Chats: "chatbubbles",
  Users: "people",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: true,
  };
};

export const AppNavigator = () => {
  return (
    <SafeArea>
      <StreamChatProvider>
        <OverlayProvider>
          <Chat client={chatClient}>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen
                name="Chats"
                component={ChatNavigator}
                options={{ tabBarBadge: 3 }}
              />
              <Tab.Screen name="Users" component={UsersScreen} />
            </Tab.Navigator>
          </Chat>
        </OverlayProvider>
      </StreamChatProvider>
    </SafeArea>
  );
};
