import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity,StatusBar,Platform} from "react-native";
import * as sp from "../shared/sp"

export default class Page2 extends Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
            <ImageBackground source={require("../assets/UiPage2.png")} style={styles.container}>
                <View style={{height:50, width:"100%", justifyContent:"center"}}>
                    <TouchableOpacity style={{justifyContent:"center", height:50, width:50}} onPress={()=> {this.props.navigation.goBack()}}>
                        <Image source={require("../assets/arrow.png")} style={{height:50, width:50}} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center", width:"100%"}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QrTimeIn")}} style={{height:60, width:"60%", backgroundColor:"#3498DB", justifyContent:"center", alignItems:"center",borderRadius:10}}>
                    <Text style={{fontSize:20, fontWeight:"700", color:"white"}}>Time In</Text>
                </TouchableOpacity>
                <sp.SizedBox height={170}/>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("QrTimeOut")}} style={{height:60, width:"60%", backgroundColor:"#9B59B6", justifyContent:"center", alignItems:"center",borderRadius:10}}>
                    <Text style={{fontSize:20, fontWeight:"700", color:"white"}}>Time Out</Text>
                </TouchableOpacity>
                </View>
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
    
});