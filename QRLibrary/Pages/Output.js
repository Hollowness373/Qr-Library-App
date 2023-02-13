import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView,Linking,StatusBar,Platform} from "react-native";
import * as sp from "../shared/sp";
import * as WebBrowser from 'expo-web-browser';


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
export default class Output extends Component{
    constructor(props){
        super(props);
        this.state={
            info:[],
          }
    }

    componentDidMount = async()=>{
        this.props.navigation.addListener("focus", async()=>{
        let url="http://192.168.43.132/ActubAPI/displaydata.php";
        let response=await get (url,{});
        let decoded_object= JSON.parse(response);
        this.setState({
          info: decoded_object
        });
    });
      }
      saveData = async()=>{
          Linking.openURL('http://192.168.43.132/ActubAPI/downloaddatatable.php');
          /* let url="http://192.168.43.132/ActubAPI/downloaddatatable.php";
          let response = await post(url,{});
          alert("sacoabcas"); */

      }

    render(){
        let display = this.state.info.map((db_info)=>{
            return <Item content ={db_info}/>
          })
        return(
            <ImageBackground source={require("../assets/UiRecords.png")} style={styles.container}>
                <View style={{height:50, width:"100%", justifyContent:"center"}}>
                    <TouchableOpacity style={{justifyContent:"center", height:50, width:50}} onPress={()=> {this.props.navigation.goBack()}}>
                        <Image source={require("../assets/arrow.png")} style={{height:50, width:50}} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,width:"100%",padding:20}}>
                    <View style={{width:"100%", height:420}}>
                    <View style={{height:30,width:"100%",flexDirection:"row", justifyContent:"space-evenly"}}>
                        <View style={styles.columnStyle}>
                            <Text style={{fontSize:20, fontWeight:"700"}}>Name</Text>
                        </View>
                        <View style={styles.columnStyle}>
                            <Text style={{fontSize:20, fontWeight:"700"}}>Course</Text>
                        </View>
                        <View style={styles.columnStyle}>
                            <Text style={{fontSize:20, fontWeight:"700"}}>TimeIn</Text>
                        </View>
                        <View style={styles.columnStyle}>
                            <Text style={{fontSize:20, fontWeight:"700"}}>TimeOut</Text>
                        </View>
                    </View>
                        <View>
                            <ScrollView>
                        {display}
                        </ScrollView>
                        </View>
                    </View>
                    <sp.SizedBox height={20}/>
                    <View style={{flex:1,width:"100%",padding:20}}>
                    <TouchableOpacity onPress={this.saveData} style={{height:50, width:"50%", backgroundColor:"#dbce1a", justifyContent:"center", alignItems:"center",borderRadius:15}}>
                    <Text style={{fontSize:20, fontWeight:"700", color:"white"}}>Save Data</Text>
                    </TouchableOpacity>
                    <sp.SizedBox height={20}/>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResetData")}} style={{height:40, width:"40%", backgroundColor:"#de2e1b", justifyContent:"center", alignItems:"center",borderRadius:15}}>
                    <Text style={{fontSize:16, fontWeight:"700", color:"white"}}>Reset Data</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
            </ImageBackground>
        );
    }
}

const Item = (props)=> {
    let content=props.content;
    let FullName=content.FullName;
    let Course=content.Course;
    let TimeIn=content.TimeIn;
    let TimeOut=content.TimeOut;


    
    return(
        
        <View style={{ width:"100%",backgroundColor:"white",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            
            <View style={{justifyContent:"center",alignItems:"center",width:"25%",height:30,borderWidth:1}}>
                <Text style={styles.dataStyle2}>{FullName}</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",width:"25%",height:30,borderWidth:1}}>
                <Text style={styles.dataStyle2}>{Course}</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",width:"25%",height:30,borderWidth:1}}>
                <Text style={styles.dataStyle2}>{TimeIn}</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",width:"25%",height:30,borderWidth:1}}>
                <Text style={styles.dataStyle2}>{TimeOut}</Text>
            </View>
        </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        borderTopWidth: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    scanButton: {
        height: 80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    columnStyle:{
        width:"25%",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        backgroundColor:"white"
    },
    dataStyle2:{
        justifyContent:"center",
        alignItems:"center",
        fontSize:10,
        padding:10
    }

});