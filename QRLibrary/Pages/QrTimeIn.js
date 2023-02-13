import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Qr from "./Qr";
import * as sp from "../shared/sp";

export default class Output extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <ImageBackground source={require("../assets/UiHome.png")} style={styles.container}>
                <Qr />
                <sp.SizedBox height={100} />
                <LinearGradient colors={["#9B59B6", "#3498DB"]} style={styles.scanButton}>
                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate("Home")}} style={styles.scanButton}>
                        <Text style={{fontSize:18, fontWeight:"600", color:"white"}}>Return Home</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
    },
    scanButton: {
        height: 50,
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }

});