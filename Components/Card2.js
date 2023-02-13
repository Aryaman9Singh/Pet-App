import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {dataFlatlist1} from '../Dummy Data/dataFlatlist1';

export default function Card2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={dataFlatlist1}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={styles.firstList}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Product', {item});
                  }}
                  style={styles.product}>
                  <Image style={styles.image} source={item.url} />
                  <Text style={styles.productList1_Text}>{item.name}</Text>
                  <Text>{item.price}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
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
    width: '80%',
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
    height: 200,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  productList1_Text: {
    fontSize: 16,
    fontWeight: '600',
  },
  firstList: {
    flexDirection: 'row',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  list1heading: {
    fontSize: 20,
    fontWeight: '600',
  },
});
