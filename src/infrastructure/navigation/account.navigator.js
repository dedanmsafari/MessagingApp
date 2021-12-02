import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Account" screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false
        }}>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}