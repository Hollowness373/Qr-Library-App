import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, TextInput,StatusBar,Platform} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import * as sp from "../shared/sp";

function post(url, parameters) {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      var queryString = Object.keys(parameters)
        .map((key) => key + "=" + parameters[key])
        .join("&");
  
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
        }
      };
  
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(queryString);
    });
  }
  function get(url, parameters) {
    return new Promise((resolve, reject) => {
      var xhttp = new XMLHttpRequest();
      var queryString = Object.keys(parameters)
        .map((key) => key + "=" + parameters[key])
        .join("&");
  
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);
        }
      };
  
      xhttp.open("GET", url + "?" + queryString, true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send(queryString);
    });
  }

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            Verify:"",
            Admin:"",
        }
    }

    componentDidMount = async()=>{
        let url="http://192.168.43.132/ActubAPI/verifydata.php";
        let response=await get (url,{});
        let decoded_object= JSON.parse(response);
        this.setState({
          Admin: decoded_object
        });
      }
insertRecord=async()=>{
    let Admin=this.state.Admin;
    let Verify=this.state.Verify;
    if(Verify==Admin){
        let url = "http://192.168.43.132/ActubAPI/resetdatadb.php";
        let response=await post (url,{});
        alert("Data has been reset");
    }else{
    alert("invalid Password");
    }

    
}
    render(){
        return(
            <ImageBackground source={require("../assets/UiHome.png")} style={styles.container}>
                <View style={{height:50, width:"100%", justifyContent:"center"}}>
                    <TouchableOpacity style={{justifyContent:"center", height:50, width:50}} onPress={()=> {this.props.navigation.openDrawer()}}>
                        <Image source={require("../assets/menu.png")} style={{height:50, width:50}} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:30,width:"100%"}}>
                    <View style={{backgroundColor:"white",alignItems:"center",justifyContent:"center", borderRadius:10,alignSelf:"stretch",width:"100%",padding:30,}}>
                        <Text style={{color:"#525252",fontSize:20,fontWeight:"700"}}>Reset Data Table</Text>
                        <Text style={{color:"#525252",fontSize:16,fontWeight:"700"}}>Reset only after saving the Table</Text>

                        <sp.SizedBox height={20} />
                        <TextInput secureTextEntry={true} onChangeText={(Verify)=>{this.setState({Verify})}} style={{borderWidth:1, width:"100%", fontSize:20,padding:10,borderRadius:10}} placeholder={"Verify"}/>
                        <sp.SizedBox height={30} />
                        <TouchableOpacity onPress={this.insertRecord} style={{height:50, width:"100%", backgroundColor:"#de2e1b", justifyContent:"center", alignItems:"center",borderRadius:10}}>
                            <Text style={{fontSize:16, fontWeight:"700", color:"white"}}>Reset Table</Text>
                        </TouchableOpacity>
                    </View>
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
    scanButton: {
        height: 50,
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
    }

});