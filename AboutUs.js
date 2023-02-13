import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';


export default function AboutUs() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={require('./assets/logot.png')} style={styles.logo} />
          <Text style={styles.logoText}>About PetApp</Text>
        </View>
        <Image
          source={require('./assets/AboutUsImages/image1.jpg')}
          style={styles.img}
        />
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </Text>
        <Image
          source={require('./assets/AboutUsImages/image2.jpg')}
          style={styles.img}
        />
        <Text style={styles.details}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis.
        </Text>
        <Image
          source={require('./assets/AboutUsImages/image3.jpg')}
          style={styles.img}
        />
        <Text style={styles.details}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi.
        </Text>
        <Image
          source={require('./assets/AboutUsImages/image4.jpg')}
          style={styles.img}
        />
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </Text>
      </View>
      <Text>Our Partners</Text>
      <View style = {styles.bottomBar}>
        <Image
          source={require('./assets/logot.png')}
          style={styles.imagebottom}
        />
         <Image
          source={require('./assets/logot.png')}
          style={styles.imagebottom}
        />
         <Image
          source={require('./assets/logot.png')}
          style={styles.imagebottom}
        />

        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 320,
    width: 320,
    resizeMode: 'contain',
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  logoBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    height: 40,
    width: 80,
  },
  logoText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#303030',
  },
  details: {
    fontSize: 17,
    color: '#303030',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  imagebottom: {
    height: 50,
    width: 100,
  },
  bottomBar:{
    flexDirection:'row',
    height:200,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
});
