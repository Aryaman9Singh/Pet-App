import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function SixImageBar(props) {
  return (
 
      <TouchableOpacity style = {styles.box}>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
      </TouchableOpacity>
      
  );
}

const styles = StyleSheet.create({
box:{
    height:100,
    width:100,
    backgroundColor:'red',

}
})