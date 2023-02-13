import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import * as sp from "./shared/sp";
export default class CustomDrawer extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <View style={styles.container}>
        <DrawerBTN context = {this} name= {"Home"}/>
        <DrawerBTN context = {this} name= {"Page2"}/>
        <DrawerBTN context = {this} name= {"Output"}/>
        <DrawerBTNS context = {this} name= {"Register"}/>


      </View>
    );
  }
}
const DrawerBTN = props => {
    return(
        <TouchableOpacity onPress ={() => {props.context.props.navigation.navigate(props.name)}}
        style = {{
            alignSelf: "stretch",
            padding: 20, justifyContent: "center",
            marginBottom: 10
        }}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    );
}
const DrawerBTNS = props => {
  return(
      <TouchableOpacity onPress ={() => {props.context.props.navigation.navigate(props.name)}}
      style = {{
          alignSelf: "stretch",
          padding: 20, justifyContent: "center",
          marginBottom: 10, position:"absolute", bottom:0
      }}>
          <Text>{props.name}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding: 10
  },

});