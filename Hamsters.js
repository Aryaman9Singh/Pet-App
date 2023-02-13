import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './Components/Card'
import Card2 from './Components/Card2'

export default function Hamsters() {
    return (
        <View style = {styles.container}>
          <ScrollView style = {styles.scroll}>
<Card text = "Hamsters"/>
<Card2  text = "Hamsters"/>
<Card/>
<Card2/>
</ScrollView>
        </View>
    )
}

 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor: '#219ebc',
         justifyContent:'center',
         alignItems:'center',         
     },
     scroll:{
         width:'93%',

     }
 })