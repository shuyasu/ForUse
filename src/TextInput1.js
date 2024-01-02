import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

const textInput = () => {
  const shubham = () => {
    alert("function called")
  }
  const shobhit = () => {
    console.warn("press succesfull")
  }
    
  return (
    
    <View style={styles.container}>
      <TextInput style={styles.textinput}
         placeholder='enter your name here'
         />

         <Button title='Click here' onPress={shubham} color="black"></Button>
         <Text >switch for second button</Text>
         <Button style={styles.buttons} title="alert then press here" onPress={shobhit}/>
      
    </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
    
     backgroundColor:"yellow",
     margin:16
  },
  testinput:{
    backgroundColor:"red",
    fontSize:50

  },
  buttons:{
    marginTop:40,
    marginBottom:40
  }
})

export default textInput