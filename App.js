import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './login';
import Home from './Home';
import Cart from './Cart';
import Product from './Product';
import Selector from './Selector';
import AboutUs from './AboutUs';
import Accessories from './Accessories';
import GroomingAndTraining from './GroomingAndTraining';
import HealthCare from './HealthCare';
import FindaClinic from './FindaClinic';
import OrderMed from './OrderMed';
import BookAmbulance from './BookAmbulance';
import OnlineVet from './OnlineVet';
import ajax from './ajax';
const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login ">
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Selector"
          component={Selector}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Accessories"
          component={Accessories}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="GroomingAndTraining"
          component={GroomingAndTraining}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="HealthCare"
          component={HealthCare}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Find A Clinic"
          component={FindaClinic}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Order Med"
          component={OrderMed}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Book An Ambulance"
          component={BookAmbulance}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Online Vet"
          component={OnlineVet}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Product"
          component={Product}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="About Us"
          component={AboutUs}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
    borderBottomWidth: 0.5,

    marginBottom: 10,
  },
  loginButton: {
    width: 100,
    height: 30,
    backgroundColor: '#219ebc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
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
  },
});
