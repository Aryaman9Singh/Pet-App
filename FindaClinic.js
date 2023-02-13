import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {VetList} from './Dummy Data/VetList';

export default function FindaClinic({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HealthCare')}
        style = {styles.backButton}
        >
       <Image source = {require('./assets/icons/backArrow.webp')} style = {{height:40,width:30}}/>
      </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity>
          <Image
            source={require('./assets/icons/iconSearch.jpg')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={VetList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.docCard}>
            
                <Image style={styles.image} source={item.url} />
             
              <TouchableOpacity style={styles.info}>
                <Text style={{color:'#030303',fontWeight: '600', fontSize: 18}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: '500', fontSize: 15}}>
                  {item.specialist}
                </Text>
                <Text style={{color:'#030303',fontWeight: '400', fontSize: 15}}>
                  {item.address}
                </Text>
                <Image
                  source={require('./assets/icons/stars.png')}
                  style={{height: 15, width: 70}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  docCard: {
    height: 110,
    width: '95%',
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    width: '100%',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 500,
    backgroundColor: '#cad8de',
    marginLeft: 20,
  },
  info: {
    flex: 2,
    height: 100,
    marginLeft: 100,
  },
  input: {
    width: '75%',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    //   borderWidth:1,
    
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10
  },
  searchIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    padding:10
  },
});
