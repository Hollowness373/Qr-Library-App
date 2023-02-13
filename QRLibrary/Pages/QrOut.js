import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
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

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  //const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async({ data }) => {
    setScanned(true);
    alert(`${data}`);
    var QrScanned = `${data}`;
    console.log(QrScanned);
    if (QrScanned.length==0){
      alert("Required Field is Missing!");
  }
  else {
      var InsertAPI = "http://192.168.43.132/ActubAPI/scanningtimeout.php";
      var Data ={
          QrScanned: QrScanned,
      }
      let response = await post(InsertAPI, Data);
  }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
     <View style={styles.container}>
        <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

        </View>
        <sp.SizedBox height={20} />
    {scanned && 
    <LinearGradient colors={["#9B59B6", "#3498DB"]} style={styles.scanButton}>
    <TouchableOpacity onPress={()=> {setScanned(false)}} style={styles.scanButton}>
        <Text style={{fontSize:18, fontWeight:"600", color:"white"}}>Scan Again</Text>
    </TouchableOpacity>
</LinearGradient>}
 </View> 
  );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:500,
        alignItems:"center"
    },
    scanButton: {
        height: 50,
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }
})