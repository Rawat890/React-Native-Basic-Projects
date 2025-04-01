import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, TouchableOpacity, View, Text, StyleSheet, Image, Modal, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type PhotoItem ={
  uri:string;
}

const {width, height}=Dimensions.get("window");
const itemSize = width/3;

export default function Detail() {
  const [capturedPhotos, setCapturedPhotos]=useState<PhotoItem[]>([]);
  const [selectedPhoto, setSelectedPhoto]=useState<PhotoItem | null>(null);
  const navigation = useNavigation();

  const loadSavedPhotos = useCallback(async () => {
    try {
      const savedPhotos =  await AsyncStorage.getItem("capturedPhotos");
      if (savedPhotos) {
        setCapturedPhotos(JSON.parse(savedPhotos))
      }
    } catch (error) {
      console.log("Failed to load Photos: ", error)
    }
  }, [])


  useEffect(()=>{
    const unsubscribe= navigation.addListener("focus", ()=>{
      loadSavedPhotos();    })
      return unsubscribe;
  }, [navigation, loadSavedPhotos])


  const openPhotos = (item:PhotoItem)=>{
    setSelectedPhoto(item)
  }

  const closePhoto = ()=>{
    setSelectedPhoto(null)
  }

 
  const renderItem = ({item}:{item:PhotoItem})=>(
    <TouchableOpacity onPress={()=>openPhotos(item)} style={styles.item}>
      <Image source={{uri:item.uri}} style={styles.photo}/>
    </TouchableOpacity>
  )


  const renderFullScreenPhoto=()=>(
    <Modal>
      <SafeAreaView style={styles.fullScreenContainer}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}></Text>
        </TouchableOpacity>
        <Image source={{uri:selectedPhoto?.uri}} style={styles.fullScreenPhoto} resizeMode="contain"/>
      </SafeAreaView>
    </Modal>
  )



  return(
    <View style={styles.container}>
      {capturedPhotos.length > 0 ? (
        <FlatList data={capturedPhotos} renderItem={renderItem} numColumns={3} keyExtractor={(item, index)=>index.toString()}/>
      ) : (
        <Text style={styles.noPhotosText}>No photos captured Yet</Text>
      )}
      {renderFullScreenPhoto()}
    </View>
  )

}



const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff'
},
item:{
  width:itemSize,
  height:itemSize,
  padding:2
},
photo:{
  width:'100%',
  height:'100%'
},
noPhotosText:{
  fontSize:18,
  textAlign:'center',
  marginTop:50,
},
fullScreenContainer:{
  flex:1,backgroundColor:'black',
  justifyContent:'center',
  alignItems:'center'
},
fullScreenPhoto:{
  width:width,
  height:height
},
closeButton:{
  position:"absolute",
  top:40,
  right:20,
  zIndex:1
},
closeButtonText:{
  color:'white',
  fontSize:35
}
})