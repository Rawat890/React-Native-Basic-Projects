import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { CameraView, useCameraPermissions, CameraCapturedPicture, BarcodeScanningResult } from "expo-camera";
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraTab() {
  const [facing, setFacing]=useState<"back" | "front">("back");
  const[zoom, setZoom]=useState(0);
  const[capturedPhotos, setCapturedPhotos]=useState<Array<{uri:string}>>(
    []
  );

  const [permission, requestPermission]=useCameraPermissions();
  const[isBarCodeMode, setIsBarCodeMode]=useState(false);
  const[barcodeResult, setBarcodeResult]=useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  useEffect(()=>{
    loadSavedPhotos();
  },[])

  const loadSavedPhotos = useCallback(async () => {
    try {
      const savedPhotos = await AsyncStorage.getItem("capturedPhotos");
      if (savedPhotos) {
        setCapturedPhotos(JSON.parse(savedPhotos))
      }
    } catch (error) {
      console.log("Failed to load : ", error)
    }
  },[])

  const savePhoto = useCallback(async (newPhoto:{uri:string}) => {
    try {
      const updatedPhotos = [newPhoto, ...capturedPhotos]
      await AsyncStorage.setItem(
        "capturedPhotos", 
        JSON.stringify(updatedPhotos)
      )
      setCapturedPhotos(updatedPhotos)
    } catch (error) {
      console.log("Failed to load : ", error)
    }
  },[capturedPhotos])


  const toggleCameraFacing = useCallback(()=>{
    setFacing((current)=>(current==="back" ? "front":"back"))
  },[]) 

  const handleZoomChange = useCallback((value:number)=>{
    setZoom(value)
  },[]) 

  const takePicture = useCallback(async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: false,
        exif:false
        
      });
  
      if (photo?.uri) {
        await savePhoto({ uri: photo.uri });
      } else {
        console.log("Photo URI is undefined");
      }
    }
  }, [savePhoto]);
  

  

const toggleBarcodeMode=useCallback(()=>{
  setIsBarCodeMode((prev)=>!prev)

},[])

const handleBarcodeScanned = useCallback(({data}:BarcodeScanningResult)=>{
  setBarcodeResult(data)
}, [])


if (!permission) {
  return <View/>
}
if (!permission.granted) {
  return <View style={styles.container}>
    <Text style={styles.text}>We need your permission to show the camera</Text>
    <TouchableOpacity style={styles.button} onPress={requestPermission}>
      <Text style={styles.buttonText}>Grant Permissions</Text>
    </TouchableOpacity>
    </View>
}


return(
  <View style={styles.container}>
<CameraView ref={cameraRef} style={styles.camera} facing={facing} zoom ={zoom} barcodeScannerSettings={{
  barcodeTypes:[
    "qr",
    "ean13",
    "ean8",
    "pdf417",
    "aztec",
    "datamatrix"
  ]
}} onBarcodeScanned={isBarCodeMode ? handleBarcodeScanned :undefined}>

<View style={styles.controlsContainer}>
  <View style={styles.row}>
    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
      <Text style={styles.buttonText}>Flip</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={toggleBarcodeMode}>
       <Text style={styles.buttonText}>{isBarCodeMode ? "Photo Mode" : "Barcode Mode"}</Text>
    </TouchableOpacity>
  </View>

  <View>
    <Text style={styles.text}>Zoom :{zoom.toFixed(1)}</Text>
    <Slider style={styles.slider} minimumValue={0} maximumValue={1} value={zoom} onValueChange={handleZoomChange}/>
  </View>
  {!isBarCodeMode && (<View style={styles.row}>
 <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
     <Text style={styles.captureButtonText}>Take Photos</Text>
 </TouchableOpacity>
    </View>
    )}
</View>
</CameraView>

<Modal animationType="slide" transparent={true} visible={!!barcodeResult} onRequestClose={()=>setBarcodeResult(null)}>
  <View>
    <Text style={styles.modalView}></Text>
    <Text style={styles.modalText}>Barcode Detected:</Text>
    <Text style={styles.barcodeText}>{barcodeResult}</Text>
    <TouchableOpacity style={[styles.button, styles.buttonClose]}>
      <Text style={styles.buttonText}>Close</Text>
    </TouchableOpacity>
  </View>

</Modal>
</View>
)

}


const styles = StyleSheet.create({
  text:{

  },
container:{
  flex:1,
  backgroundColor:'#000'
},
camera:{
  flex:1
},
controlsContainer:{
  position:'absolute',
  bottom:0,
  left:0,
  right:0,
  padding:20,
  backgroundColor:"rgba(0,0,0,0.5)"
},
row:{
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  marginBottom:20
},
button:{
  backgroundColor:"#fff",
  padding:10,
  marginLeft:35,
  borderRadius:10
}, buttonText:{
  color:"black",
  fontSize:16
},
slider:{
  flex:1,
  marginLeft:10
},
captureButton:{
  backgroundColor:'#fff',
  paddingVertical:15,
  paddingHorizontal:30,
  borderRadius:30
},
captureButtonText:{
  color:'black' ,
  fontWeight:'bold',
  fontSize:18
}, 
modalView:{
  margin:20,
  backgroundColor:"white",
  borderRadius:20,
  padding:35,
  alignItems:'center'
},
modalText:{
  marginBottom:15,
  textAlign:'center',
  fontSize:18,
  fontWeight:'bold'
},
barcodeText:{
  marginBottom:15,
  textAlign:'center',
  fontSize:16
},
buttonClose:{
  backgroundColor:'#2196F3',
  marginTop:10
}
})