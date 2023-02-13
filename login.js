import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.secondbox}>
        <ImageBackground
          source={require('./assets/dog2.jpg')}
          style={styles.bgImage}>
            <View style={styles.logobar}>
          <Image style={styles.image} source={require('./assets/logot.png')} />
          <Text style={styles.Logotext}>Pet App</Text>
        </View>
          <View style={styles.box}>
            <TextInput style={styles.inputBox} placeholder="Username" />
            <TextInput style={styles.inputBox} placeholder="Password" />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                navigation.navigate('Selector');
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
    width: '100%',
    marginTop: '30%',
  },
  login: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 30,
  },
  inputBox: {
    width: '90%',
    borderRadius: 50,
    // borderBottomWidth: 0.5,
backgroundColor:'#dae8e4',
    marginBottom: 10,
  },
  loginButton: {
    width: 100,
    height: 30,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop:150,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 20,
    fontFamily:'SansitaSwashed-VariableFont_wght'
  },
  bgImage: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    top:90
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
    fontSize: 48,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Hubballi-Regular'
  },
});
