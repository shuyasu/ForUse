import { View, Text,TextInput, TouchableOpacity,Button,StyleSheet, } from 'react-native'
// import React from 'react'
import React ,{useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Constants/colors';
import Signup from './Signup';
import Typography from "../../Component/typography";
import VendorHeader from '../../Component/Vendorheader'
// import Forgotpassword from './Screens/Onboarding/Forgotpassword'
// import Header from '../../Component/Vendorheader';
import CustomButton from '../../Component/CustomButton';
import CustomHeader from "../../Component/CustomHeader"
import Container from '../../Component/container';
import Content from '../../Component/content';
// 

const Login = (props) => {

  const [text, setText] = useState('');
  const [Password, setPassword] = useState('');
  
  return (
    <Container>
      <VendorHeader>
    <CustomHeader 
    leftComponent = {
      <View style={{paddingTop:5}}></View>
    }
    centerComponent={<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 5, }}>
            <View>
             <Typography  numberOfLines={1} size={19} type={"bold"} color={"textPrimary"}  >
               Login
              </Typography></View>

          </View>} />
          </VendorHeader>
          <Content> 
           <View style={{marginTop:300}}>
          <TextInput
        style={styles.input}
        placeholder='Enter Email Id '
        onChangeText={setText}
        value={text}
      />
      <TextInput 
      style={styles.input}
      value={Password}
      onChangeText={setPassword}
      placeholder='Enter Password'
      // right={}
      secureTextEntry={true}
      
  
      />
       <TouchableOpacity onPress={()=>props.navigation.navigate("Forgotpassword")}>
      <Typography colour = {colors.blue} size = {16} type={"extraBold"} fontWeight='bold'style={{  fontSize:16,alignSelf:"flex-end",marginRight:55}}>Forgot Password</Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Dashboard")} style={styles.button}>
        {/* <View > */}
          <Typography color="white" style={{padding:10, color:"white",alignSelf:"center",fontWeight:"bold"}}>Submit</Typography>
        {/* </View> */}
      </TouchableOpacity>
      <View style={{display:'flex', flexDirection:'row',justifyContent:"center",margin:16}}>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Collapseable")}> 
      <Typography colour={colors.blue}  size = {16} style={{color:colors.blue, fontWeight:"bold", fontSize:16}}>Don't have an account !  </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate("Signup")}>
      <Typography colour={colors.green} type='bold' size = {16} style={{color:colors.green, fontWeight:"bold", fontSize:16}}>Signup</Typography>
      </TouchableOpacity>
      </View> 
      </View>
      </Content>
   </Container>
   

  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    marginLeft:50,
    marginRight:50
  },
  button:{
    backgroundColor:"red",
    marginTop:"30%",
    width:"40%",
    alignSelf:"center",
    borderRadius:15
    
  }
});