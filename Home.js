import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {dataFlatlist1} from './Dummy Data/dataFlatlist1';
import SixImageBar from './Components/SixImageBar';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Card3';
import ChoiceMaker from './Components/ChoiceMaker';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Selector')}>
          <Image
            source={require('./assets/icons/backArrow.webp')}
            style={{height: 40, width: 30}}
          />
        </TouchableOpacity>
        <TextInput placeholder="Search" style={styles.searchbar} />
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('./assets/icons/cart.webp')}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.list1heading}>Popular Deals</Text>
        <View style={{flex: 1.55, flexDirection: 'row'}}>
          <FlatList
            data={dataFlatlist1}
            style={styles.list}
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
        <TouchableOpacity style={styles.highlight}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/photos/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-picture-id1213516345?k=20&m=1213516345&s=612x612&w=0&h=_XUSwcrXe5HjI2QEby0ex6Tl1fB_YJUzUU8o2cUt0YA=',
            }}
            style={styles.imageTop}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              source={require('./assets/icons/iconDog.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              source={require('./assets/icons/iconCat.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBox}>
            <Image
              source={require('./assets/icons/iconBird.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              source={require('./assets/icons/iconHamster.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Image
              source={require('./assets/icons/iconFish.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.productBox1}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.highlight,{ alignItems: 'stretch' }]}>
          <ChoiceMaker
            title="Question"
            option1="Option 1"
            option2="Option 2"
            option3="Option 3"
          />
        </TouchableOpacity>
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
  list: {
    height: 220,
  },
  product: {
    // backgroundColor: '#E0E0E0',
    backgroundColor: '#219ebc',
    margin: 10,
    justifyContent: 'center',
    height: '90%',
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  productList1_Text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
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
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },

  icon: {
    height: 50,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  iconBox: {
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#219ebc',
    borderRadius: 28,
  },
  imageTop: {
    width: 300,
    height: 250,
    borderRadius: 20,
  },
  highlight: {
    // width:'90%',
    height: 300,
    backgroundColor: '#ffb703',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
  },
});
