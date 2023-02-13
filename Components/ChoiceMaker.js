import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ChoiceMaker(props) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.question}>{props.title}</Text>
<TouchableOpacity style = {[styles.choice,{width:'90%'}]}>
    <Text style = {styles.optionText}>{props.option1}</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.choice}>
<Text  style = {styles.optionText}>{props.option2}</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.choice}>
<Text  style = {styles.optionText}>{props.option3}</Text>
</TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
height:300,
// width:'95%',
justifyContent:'center',
    },
choice:{
    height:70,
    width:'80%',
    backgroundColor:'white',
    marginBottom:8,
    borderBottomRightRadius:50,
    borderTopRightRadius:50,
    justifyContent:'center'
},
question:{
  color: 'white',
fontSize:25 ,
fontFamily: 'Hubballi-Regular'

},
optionText:{
  fontSize:16,
}
})