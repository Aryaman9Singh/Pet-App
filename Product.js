import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Product({route, navigation}) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      {/* <View style={styles.box1}> */}
        <ImageBackground source={item.url} style={styles.image}>
          <TouchableOpacity
            style={styles.backButon}
            onPress={() => navigation.navigate('Selector')}>
            <Image
              source={require('./assets/icons/backArrow.webp')}
              style={{height: 40, width: 40}}
            />
          </TouchableOpacity>
          <View style={styles.box2}>
        <TouchableOpacity style={styles.nameBox}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={{}}>{item.smallDetail}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      </View>
        </ImageBackground>
      {/* </View> */}
     
    </View>
    // <View style={styles.container}>
    //
    //   <View style={styles.card}>
    //     <Image source={item.url} style={styles.productImage} />
    //     <Text style={styles.text1}>{item.name}</Text>
    //     <Text style={styles.text2}>{item.price}</Text>
    //     <View style={styles.quantityBox}>
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.incrementors}>-</Text>
    //       </TouchableOpacity>
    //       <Text>{item.quantity}</Text>
    //       <TouchableOpacity style={styles.button}>
    //         <Text style={styles.incrementors}>+</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   height: '100%',
  //   backgroundColor: '#90e0ef',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // card: {
  //   height: '90%',
  //   backgroundColor: '#ffffff',
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 60,
  // },
  // productImage: {
  //   height: '50%',
  //   width: '90%',
  //   margin: 20,
  // },
  // text1: {
  //   fontWeight: '700',
  //   fontSize: 24,
  //   color: '#000000',
  // },
  // text2: {
  //   fontWeight: '600',
  //   fontSize: 18,
  // },
  // button: {
  //   backgroundColor: '#023e8a',
  //   height: 32,
  //   width: 32,
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // quantityBox: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   width: '40%',
  //   alignItems: 'center',
  // },
  // incrementors: {
  //   fontSize: 20,
  //   color: '#ffffff',
  // },
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection:'column',
    
  },
  box2: {
top:100,
    width: '100%',
    height: '120%',
    top: -70,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 30,
    backgroundColor:'red'
  },
  backButon: {
    backgroundColor: '#bfbfbf',
    height: 40,
    width: 40,
    borderRadius: 500,
    margin: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: '#030303',
  },
  price: {
    fontWeight: '500',
    fontSize: 20,
    color: '#030303',
  },
});
