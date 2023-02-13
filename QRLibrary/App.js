import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();
import Home from "./Pages/Home";
import Output from "./Pages/Output";
import Page2 from "./Pages/Page2";
import Register from "./Pages/Register";
import Qr from "./Pages/Qr";
import QrTimeIn from "./Pages/QrTimeIn";
import QrTimeOut from "./Pages/QrTimeOut";
import ResetData from "./Pages/ResetData";
import CustomDrawer from "./CustomDrawer";


export default function App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent= {props => <CustomDrawer {...props} />}
                initialRouteName="Home"
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
            

            </Drawer.Navigator>
        </NavigationContainer>  
        
    );
}