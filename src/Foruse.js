import React from 'react';
import { useState } from 'react';
import {StyleSheet,Text,View,SafeAreaView,SectionList,TextInput,StatusBar, } from 'react-native';

const DATA = [
    {
      title: 'General tab',
      data: ['Name', 'Address', 'TimeZoneMobile','Email ID','Fax Details'],
    },
    {
      title: 'Tax Data',
      data: ['GST Number', 'Pan Number', 'CIN Number', 'MSME Number', 'Aadhar No','DMS' ],
    },
    {
      title: 'Bank Details',
      data: ['Bank Serial Number', 'Account Type', 'Bank Country', 'Bank key (IFSC)', 'Bank Account','Account Holder Name', 'Bank Name ', 'Bank City','Mode of Payment' ],
    },
    {
      title: 'Company Data',
      data: ['Currency','Turnover','Company code','Payment Term','Inco Term','Plant Details.'],
    },
    {
        title: 'Contact Person',
        data: ['Buyer Contact Person Details.','Supplier Contact Person Details.'],
      },
  ];

  const SectionListScreen = ()=>{
    const[Name,setName]=useState([])
    const onChangeName=(text,index)=>{

      // console.log(index);
    let TempNameArr=[]
    TempNameArr=Name


     const ArrIndex=Name.findIndex((val)=>val.Index==index)
    
     if(ArrIndex==-1){
       TempNameArr.push({Name:text,Index:index})
      
     }
     else {
       TempNameArr.map((val,index)=>{
         if(val.Index==ArrIndex){
           val.Name=text
         }
       })
    }
    
     console.log(TempNameArr);
     setName(TempNameArr)








     }
    return(
      <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item,index}) => (
        <View style={styles.item}>
         
        <Text style={styles.title}>{item}</Text>
        <TextInput
            secureTextEntry
            value={Name}
            onChangeText={(val)=>{onChangeName(val,index)}}
            style={styles.input}
             placeholder=" "
            > 
         </TextInput>
         
         
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
      
    )
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f0ffff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
    input:{
      fontSize:10,
      height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderColor:"blue",
        backgroundColor:"white",
    }
  });
  




export default (SectionListScreen)