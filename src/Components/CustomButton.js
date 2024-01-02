import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({Label,color}) => {
    // console.log(if());
    // const []
    
  return (
    <View>
      <Text style={color!=null?styles.button :{color:color }}>{Label}</Text>
      <Text style={{color:color}}>hello</Text>
    </View>
  )
}
 const styles = StyleSheet.create({
      button:{
        color:"red"
      }
 })

export default CustomButton






 {/* <CustomButton Label="In dahsboard " color={"green"}/> */}