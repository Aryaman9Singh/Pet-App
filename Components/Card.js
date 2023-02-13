import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
        <View style = {styles.container}>
            <View style = {{justifyContent:'center', alignItems:'center'}}>

           
            <Text>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:450, 
        width:'100%',
        backgroundColor:'#edf2fb',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        marginTop:10
    }
})
