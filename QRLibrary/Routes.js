import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./Pages/Home";
import Output from "./Pages/Output";
import Page2 from "./Pages/Page2";
import Register from "./Pages/Register";
import Qr from "./Pages/Qr";
import QrTimeIn from "./Pages/QrTimeIn";
import QrTimeOut from "./Pages/QrTimeOut";
import ResetData from "./Pages/ResetData";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
        headerMode="float"
        animation="fade"
      >
        <Drawer.Screen
            options={{ headerShown: false}}
            name={"Home"}
            component={Home}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"Output"}
            component={Output}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"Page2"}
            component={Page2}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"Register"}
            component={Register}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"Qr"}
            component={Qr}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"QrTimeIn"}
            component={QrTimeIn}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"QrTimeOut"}
            component={QrTimeOut}
            />
            <Drawer.Screen
            options={{ headerShown: false}}
            name={"ResetData"}
            component={ResetData}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
