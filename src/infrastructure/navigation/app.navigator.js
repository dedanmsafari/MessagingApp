import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { ChatScreen } from "../../features/chat/screens/chat.screens";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { SafeArea } from "../../utils/safeArea.util.component";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Chats: "chatbubbles",
  Settings: "settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <SafeArea>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Chats"
          component={ChatScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeArea>
  );
};
