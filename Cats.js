import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './Components/Card'
import Card2 from './Components/Card2'

export default function Cats() {
    return (
        <View style = {styles.container}>
          <ScrollView style = {styles.scroll}>
<Card text = "cats"/>
<Card2  text = "cats"/>
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
         alignItems:'center'         
     },
     scroll:{
         width:'93%',

     }
 })