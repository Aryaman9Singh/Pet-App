import React from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native'

export default function Search() {
    return (
        <View style = {styles.container}>
          
        <TouchableOpacity style = {styles.topbar}>
       
            <TextInput  placeholder="Search" style = {styles.input}/>
            <Image source = {require('./assets/icons/iconSearch.jpg')} style = {styles.image}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#edf2fb',

        alignItems:'center'
    },
    topbar:{
        width:'100%',
     marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor:'#edf2fb',
        borderColor:"#000000",
        borderWidth:2,
        width:'85%',
      
        borderRadius:5,
    
    },
    image:{
        height:40,
        width:40,

    }
})
