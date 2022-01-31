import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton } from "../../account/components/account.styles";
import { chatClient } from "../../../services/streamChat/streamClient";
import { UserListItem } from "../components/userListItem";
import { SafeArea } from "../../../utils/safeArea.util.component";

export const SettingsScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await chatClient.queryUsers({});
      setUsers(response.users);
    };
    fetchUsers();
  }, []);

  const { logout } = useContext(AuthenticationContext);
  return (
    <View>
      <AuthButton onPress={() => logout()}>log Out</AuthButton>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
