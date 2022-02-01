import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton } from "../../account/components/account.styles";
import { chatClient } from "../../../services/streamChat/streamClient";
import { UserListItem } from "../components/userListItem";

export const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await chatClient.queryUsers({});
    setUsers(response.users);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const { logout } = useContext(AuthenticationContext);
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserListItem chatuser={item} chatClient={chatClient} />
        )}
        keyExtractor={(item) => item.id}
        refreshing={isLoading}
        onRefresh={fetchUsers}
      />
      <AuthButton onPress={() => logout()}>log Out</AuthButton>
    </View>
  );
};
