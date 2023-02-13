import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ChoiceMaker from './Components/ChoiceMaker';

export default function GroomingAndTraining({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Selector')}
        style={styles.backButton}>
        <Image
          source={require('./assets/icons/backArrow.webp')}
          style={{height: 40, width: 30}}
        />
      </TouchableOpacity>
      <Text>Grooming & Training</Text>
      <ChoiceMaker
        title="Question"
        option1="Option 1"
        option2="Option 2"
        option3="Option 3"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  backButton: {},
});
