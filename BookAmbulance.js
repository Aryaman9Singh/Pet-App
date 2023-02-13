import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function BookAmbulance() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}>
        <Image
          source={require('./assets/ambulance.jpg')}
          style={styles.image}
        />
        <Text style={styles.ambulanceHeader}>
          In any case of Emergency, ring us for free and quick Ambulance
          Service.
        </Text>
        <TouchableOpacity style={styles.numberBox}>
          <Image
            source={require('./assets/icons/phone.png')}
            style={styles.phoneImage}
          />
          <Text style={styles.number}>1800 996 969</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.numberBox}>
          <Image source={require('./assets/icons/phone.png')} style = {styles.phoneImage }/>
        <Text style={styles.number}>911</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219ebc',
  },
  innerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    height: 175,
    width: 350,
  },
  ambulanceHeader: {
    margin: 10,
    fontSize: 16,
    width: '80%',
    fontWeight: '600',
  },
  numberBox: {
    width: '60%',
    height: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ade8f4',
    borderRadius: 50,
    flexDirection: 'row',
    marginBottom: 10,
  },
  phoneImage: {
    height: 40,
    width: 40,
    borderRadius: 55,
  },
  number: {
    fontSize: 17,
    fontWeight: '700',
    color: '#030303',
  },
});
