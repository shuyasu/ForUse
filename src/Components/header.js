import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../Constants/colors'





const Header = ({menu,back,title, right, rightFunction,optionalIcon,optionalFunction, navigation}) => {

  const IconSize = 24;


  return (
    <Surface style={styles.header}>
      <View style={styles.center}>
        {menu &&
        <TouchableOpacity style={styles.leftview}onPress={()=>navigation.optionDrawer()}>
          <Feather name="menu" size={IconSize} color={colors.white}/>
        </TouchableOpacity>
       }
       { back &&
        <TouchableOpacity onPress={()=>navigation.goback()}>
          <Feather name="arrow-left" size={IconSize} color={colors.white}/>
        </TouchableOpacity>
       }
      </View>
      <View style={[styles.View, styles.rightView]}>
      
       <Title style={{color:colors.white}}>{title}</Title>
      </View>
      <View style={styles.View}>
        {optionalFunction&&<TouchableOpacity onPress={()=>{optionalFunction}}>
        <Badge>4</Badge>
          <Feather name="bell" size={IconSize} color={colors.white}/>
        </TouchableOpacity>}
        {rightFunction&&<TouchableOpacity onPress={()=>{rightFunction}}>
          <Feather name="more-vertical" size={IconSize} color={colors.white}/>
        </TouchableOpacity>}
        </View>
    </Surface>
  )
}

export default Header

const styles = StyleSheet.create({
  header:{
    height:50,
    elevation:4,
    justifycontent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    backgroundColor:"grey" 
  },
  View:{
    flex:1,
    //  backgroundColor:"yellow",
    margin:10,
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"flex-end"
    
  },
  rightView:{
    justifyContent:"center",
    fontStyle:"bold"
  },
  leftview:{
    justifycontent:"flex-start"
  },
  center:{
    flex:1
  }
  
})