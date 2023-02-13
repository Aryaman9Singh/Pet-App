import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {dataFlatlist1} from './Dummy Data/dataFlatlist1';

export default function Cart({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.topbar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Selector')}
        style = {styles.backButton}
        >
       <Image source = {require('./assets/icons/backArrow.webp')} style = {{height:40,width:30}}/>
      </TouchableOpacity>
        <TextInput placeholder="Search" style={styles.searchbar} />
       
      </View>
      
      <ScrollView>
       <Text>Cart</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#219ebc',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    
  },
  searchbar: {
    height: 40,
    backgroundColor: '#ffffff',
    width: '75%',
    borderRadius: 50,
  },
  cartButton: {
    borderRadius: 100,
    backgroundColor: '#ffffff',
    height: 40,
    width: 40,
  },

  text1: {
    backgroundColor: '#ffffff',
  },
  product: {
    backgroundColor: '#E0E0E0',
    margin: 10,
    justifyContent: 'center',
    height: 90,
    borderRadius: 30,
    alignItems: 'center',
  },
  productList1_Text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
