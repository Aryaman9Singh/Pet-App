import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';

export default function HealthCare({navigation}) {
  return (
    <View style={styles.container}>
         <TouchableOpacity
        onPress={() => navigation.navigate('Selector')}
        style = {styles.backButton}
        >
       <Image source = {require('./assets/icons/backArrow.webp')} style = {{height:40,width:30}}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => {
          navigation.navigate('Find A Clinic');
        }}>
        <Text style = {styles.choiceText}>Find A Clinic</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => {
          navigation.navigate('Order Med');
        }}>
        <Text style = {styles.choiceText}>Order Medicines</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => {
          navigation.navigate('Book An Ambulance');
        }}>
        <Text style = {styles.choiceText}>Book an Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => {
          navigation.navigate('Online Vet');
        }}>
        <Text style = {styles.choiceText}>Online Meet with A Vet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#abc4ff',
    backgroundColor: '#219ebc', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionBox: {
    height: 70,
    width: '70%',
    backgroundColor: '#ffffff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton:{
      backgroundColor:'#FFFFFF',
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:70,
      top:-170,
      right:170,
      backgroundColor:'white'
  },
   choiceText:{
    fontSize: 27,
    fontWeight: '600',
    color: '#303030',
    fontFamily:'Hubballi-Regular'
   }
});
