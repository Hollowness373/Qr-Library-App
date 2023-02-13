import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, StatusBar, Platform} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as sp from "../shared/sp";

export default class Home extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <ImageBackground source={require("../assets/UiHome.png")} style={styles.container}>
                <View style={{height:50, width:"100%", justifyContent:"center"}}>
                    <TouchableOpacity style={{justifyContent:"center", height:50, width:50}} onPress={()=> {this.props.navigation.openDrawer()}}>
                        <Image source={require("../assets/menu.png")} style={{height:50, width:50}} />
                    </TouchableOpacity>
                </View>
                <sp.SizedBox height={80}/>
                <Image source={require("../assets/QrLogo.png")} style={{height:80, width:80, borderRadius:15}} />
                <sp.SizedBox height={300}/>
                <LinearGradient colors={["#9B59B6", "#3498DB"]} style={styles.scanButton}>
                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate("Page2")}} style={styles.scanButton}>
                        <Text style={{fontSize:16, fontWeight:"700", color:"white"}}>SCAN</Text>
                    </TouchableOpacity>
                </LinearGradient>
                
                <TouchableOpacity style={{justifyContent:"center", height:50, width:50, position:"absolute", bottom:0, right:0}} onPress={()=> {this.props.navigation.navigate("Output")}}>
                        <Image source={require("../assets/records.png")} style={{height:50, width:50}} />
                </TouchableOpacity>
                
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        borderTopWidth: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    scanButton: {
        height: 50,
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
    }

});