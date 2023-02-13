import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.secondbox}>
        <Image
          source={require('./assets/selectorImage/imagetop.jpg')}
          style={styles.imageTop}
        />
        <View style={styles.logobar}>
          <Image style={styles.image} source={require('./assets/logot.png')} />
          <Text style={styles.Logotext}>Pet App</Text>
        </View>
        <View style={styles.optionBox}>
          <TouchableOpacity
            style={styles.box1}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              source={require('./assets/icons/iconDog.jpg')}
              style={styles.boxIcon}
            />
            <Text style={styles.menutext}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box1}
            onPress={() => {
              navigation.navigate('HealthCare');
            }}>
            <Image
              source={require('./assets/icons/iconHealthcare.jpg')}
              style={styles.boxIcon}
            />
            <Text style={styles.menutext}>Healthcare</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionBox}>
          <TouchableOpacity
            style={styles.box2}
            onPress={() => {
              navigation.navigate('GroomingAndTraining');
            }}>
            <Image
              source={require('./assets/icons/iconGrooming.jpg')}
              style={styles.boxIcon}
            />
            <Text style={styles.menutext}>Grooming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box2}
            onPress={() => {
              navigation.navigate('Accessories');
            }}>
            <Image
              source={require('./assets/icons/iconAccessories.jpg')}
              style={styles.boxIcon}
            />
            <Text style={styles.menutext}>Accessories</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('./assets/selectorImage/imageBottom.jpg')}
          style={styles.imageBottom}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#219ebc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    height: '5%',
  },
  secondbox: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 40,
    width: '90%',
    flexDirection: 'column',
  },
  image: {
    height: 60,
    width: 120,
  },
  logobar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  Logotext: {
    fontSize: 44,
    fontWeight: '400',
    color: '#000000',
    fontFamily:'Hubballi-Regular'
  },
  optionBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  box1: {
    height: 65,
    width: 155,
    margin: 10,
    flexDirection: 'row',    
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#219ebc',
    
  },
  box2: {
    height: 65,
    width: 155,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -80,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#219ebc',

  },
  imageBottom: {
    width: '100%',
    height: 120,
  },
  imageTop: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  menutext: {
    fontSize: 22,
    color: 'white',
    fontFamily:'Hubballi-Regular',
    

  },
  boxIcon: {
    height: 40,
    width: 40,
    borderRadius:10,
    marginLeft:5,
  },
});
