import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Card3 from './Card3';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import ajax from './ajax';
export default function Dogs() {
   //code for api
   const componentDidMount = async () =>{
    const images = await ajax.fetchDogs();
    console.log("hello")
  }
  return (
    <View style={styles.container}>
     <ScrollView style={styles.scroll}>
      <TouchableOpacity style = {styles.highlight}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-picture-id1213516345?k=20&m=1213516345&s=612x612&w=0&h=_XUSwcrXe5HjI2QEby0ex6Tl1fB_YJUzUU8o2cUt0YA=',
        }}
        style={styles.imageTop}
      />
      </TouchableOpacity>
        {/* <Card text = "Dogs"/> */}
        <Card2 text="Dogs" />
        <Card3 text="Hello" />
        <Card />
        <Card2 />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#abc4ff',
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '93%',
  },
  imageTop: {
    width: 300,
     height: 250,
     borderRadius:20

  },
  highlight:{
    // width:'90%',
    height:300,
    backgroundColor:'#ffb703',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    margin:10
  }
});
