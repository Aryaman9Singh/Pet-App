import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dogs from './Dogs';
import Cats from './Cats';
import Hamsters from './Hamsters';
import Search from './Search';

const Tab = createBottomTabNavigator();
export default function Accessories() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dogs"
        component={Dogs}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor:'#219ebc',
          tabBarInactiveTintColor: '#edf2fb',
      

          tabBarIcon: () => (
            <Image
              source={require('./assets/icons/iconDog.jpg')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cats"
        component={Cats}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor:'#219ebc',
          tabBarInactiveTintColor: '#edf2fb',
          tabBarIcon: () => (
            <Image
              source={require('./assets/icons/iconCat.jpg')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hamsters"
        component={Hamsters}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor:'#219ebc',
          tabBarInactiveTintColor: '#edf2fb',
          tabBarIcon: () => (
            <Image
              source={require('./assets/icons/iconHamster.jpg')}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor:'#219ebc',
          tabBarInactiveTintColor: '#edf2fb',
          tabBarIcon: () => (
            <Image
              source={require('./assets/icons/iconSearch.jpg')}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {width: 42, height: 42, borderRadius: 15},
});
