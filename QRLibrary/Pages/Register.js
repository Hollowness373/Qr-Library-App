import React, {Component} from "react";
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity,TextInput, Picker,StatusBar,Platform} from "react-native";
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

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            FullName:"",
            Course: "",
            Email:"",
        }
    }

    insertRecord = async() =>{
        var FullName = this.state.FullName;
        var Course = this.state.Course;
        var Email = this.state.Email;
        if (FullName.length==0 || Course.length==0 || Email.length==0){
            alert("Required Field is Missing!");
        }
        else {
            var InsertAPI = "http://192.168.43.132/ActubAPI/registertodatadb.php";
            var Data ={
                FullName: FullName,
                Course: Course,
                Email: Email,
            }
            let response = await post(InsertAPI, Data);
            alert("Registered Successfully");
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
                <View style={{flex:1,width:"100%",padding:20,justifyContent:"center",alignItems:"center"}}>
                <View style={{alignSelf:"stretch", width:"100%",backgroundColor:"white",justifyContent:"center",alignItems:"center",padding:20,borderRadius:10}}>
                <Text style={{fontSize:20,fontWeight:"700",color:"#525252"}}>Register Here!</Text>
                <Text style={{fontSize:16,color:"#525252"}}>If you have not registered yet, please do so.</Text>
                <sp.SizedBox height={20}/>
                <Text style={{fontSize:15,color:"#525252"}}>*First Name/Middle Initial/Last Name*</Text>
                <TextInput onChangeText={(FullName)=>{this.setState({FullName})}} style={{borderWidth:1, width:"100%", fontSize:20,padding:10,borderRadius:10}} placeholder={"Full Name.."}/>
                <sp.SizedBox height={20}/>
                <View style={{width:"100%"}}>
                <Picker
                style={{ height: 50, width: 150 }}
                onValueChange={(Course)=>{this.setState({Course})}} selectedValue={this.state.Course}
                >
                    <Picker.Item label="-COURSE-" value="-COURSE-" />
                    <Picker.Item label="BSCPE" value="BSCPE" />
                    <Picker.Item label="BSIE" value="BSIE" />
                    <Picker.Item label="DCET" value="DCET" />
                    <Picker.Item label="DCIT" value="DCIT" />
                    <Picker.Item label="BSIT" value="BSIT" />
                    <Picker.Item label="BSBA" value="BSBA" />
                    <Picker.Item label="BSA" value="BSA" />
                    <Picker.Item label="BEEd" value="BEEd" />
                    <Picker.Item label="BSEd-SocialStudies" value="BSEd-SocialStudies" />
                    <Picker.Item label="BSED-ENG" value="BSED-ENG" />




                </Picker>
                </View>
                <sp.SizedBox height={20}/>
                <TextInput onChangeText={(Email)=>{this.setState({Email})}} style={{borderWidth:1, width:"100%", fontSize:20,padding:10,borderRadius:10}} placeholder={"Email.."}/>
                <sp.SizedBox height={30}/>
                <TouchableOpacity onPress={this.insertRecord} style={{height:50, width:"60%", backgroundColor:"#9B59B6", justifyContent:"center", alignItems:"center",borderRadius:10}}>
                    <Text style={{fontSize:16, fontWeight:"700", color:"white"}}>Register</Text>
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

});