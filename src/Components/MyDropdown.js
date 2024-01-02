import {View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Constants/colors';
import {Image} from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import Payment from '../../Screens/Onboarding/Payment'

const countries = [
  {country: 'Afghanistan' },
  {country: 'Albania'},
  {country: 'Algeria' },
  {country: 'American Samoa'},
  {country: 'Bhutan' },
  {country: 'Nepal' },
  {country: 'India' },
  {country: 'England' },
  {country: 'SouthAfrica' },
];
// const data = [
//   'Himanshu',
//   'muskan',
//   'shubham',
//   'shagun',
//   'raghav'
// ]
const Vendor = (props) => {
//   const showFilter = () =>(
//     data.filter((item)=>item=='an')
//     ?<Text>{item}</Text>:null
//   )
  const [selectedCountry, setSelectedCountry] = useState('Select Currency');
  const [isClicked, setIsClicked] = useState(false);
  const [data,setData]=useState(countries)
  // console.log(isClicked)
  return (
     
    <View style={{paddingTop: 0}}>
      {/* <Text style={styles.heading}>Currency Dropdown</Text> */}
      <TouchableOpacity
        onPress={() => {
          setIsClicked(!isClicked);
        }}
        style={styles.dropdownselector}>
        <Text>{selectedCountry}</Text>
        {isClicked ? (
          <Image
            source={require('../../assets/dropup.png')}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require('../../assets/Dropdown-SVG-Icon-0sfe.png')}
            style={styles.icon}
          />
        )}
        {/* <Payment/> */}
      </TouchableOpacity>
      {isClicked?(<View style={styles.dropdownarea}>
         <TextInput
      placeholder='Search '
      style ={styles.searchbar}
      />
      
      <FlatList data={data} renderItem={({item,index})=>{
        return(
          
          <TouchableOpacity style={styles.countryItem} onPress = {()=>{
            setSelectedCountry(item.country);
            setIsClicked(false);
          }}>
            <Text>{item.country}</Text>

          </TouchableOpacity>
        )
      }}/>
      
      </View>):null}
     
    </View>
  );
};
      
  const styles = StyleSheet.create({
    heading: {
      fontWeight: '500',
      fontSize: 20,
      // marginTop: 100,
      alignSelf: 'flex-start',
    },
    dropdownselector: {
      width: '74%',
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '8e8e8e',
      alignSelf: 'flex-start',
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft:12,
      paddingLeft: 15,
      paddingRight: 15,
    },
    icon: {
      width: 20,
      height: 20,
    },
    dropdownarea: {
      width: '90%',
      height: 300,
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: '#fff',
      elevation: 5,
      alignSelf: 'center',
    },
    searchbar:{
      width:'90%',
      height:50,
      borderRadius:10,
      borderRightWidth:.5,
      elevation:5,
      borderColor:"white",
      alignSelf:"center",
      marginTop:20,
       paddingLeft:-15
     },
     countryItem:{
      width:"80%",
      height:50,
      borderBottomWidth:2,
      borderColor:"#8e8e8e",
      alignSelf:"center",
      justifyContent:"center"

     }
   });
  

export default Vendor;

