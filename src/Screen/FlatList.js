import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native'
import React,{useState,useEffect} from 'react'
import CustomHeader from '../../Component/CustomHeader'
import content from '../../Component/content'
import Container from '../../Component/container'
import VendorHeader from '../../Component/Vendorheader'
import Typography from '../../Component/typography'
import colors from '../../Constants/colors'
import Content from '../../Component/content'
import footer from '../../Component/footer'
import { FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import LottieAnimation from 'lottie-react-native'
import {Image} from 'react-native-elements'
import  DocumentPicker  from 'react-native-document-picker'
import Vendor from '../Onboarding/Vendor'
import CustomDropdown from '../../Component/CustomDropdown'




const Sectionlist = (props) => {

  // const Options = [
  //   { label: 'Item 1', value: '1' },
  //   { label: 'Item 2', value: '2' },
  //   { label: 'Item 3', value: '3' },
  //   { label: 'Item 4', value: '4' },
  //   { label: 'Item 5', value: '5' },
  //   { label: 'Item 6', value: '6' },
  //   { label: 'Item 7', value: '7' },
  //   { label: 'Item 8', value: '8' },
  // ];

    const selectdoc = async()=>{
        try{
            const doc = await DocumentPicker.pick();
        console.log(doc)

        }catch(err){
            if(DocumentPicker.isCancel(err))
            console.log("User Cancelled the upload",err);
            else
            console.log(err)

        }
    }
    
const [data,setData]=useState([
    {
        category_name:"General",
        SUB_CAT:[
      {  TITLE: 'Name*',  } ,
      {  TITLE: 'Address' ,},
      {  TITLE: 'Address line 1' },
      {  TITLE: 'Address line 2' },
      {  TITLE: 'Time Zone Mobile'},
      {  TITLE: 'Email Id'},
      {  TITLE:'Fax Details'},
      {  TITLE:'Mobile No'},
      {  TITLE: 'landline no' },
      {  TITLE: 'Region' },
        ],
        IS_EXPAND:false,
        Image:false
    },
    {
        category_name:"Tax Data",
        SUB_CAT:[
            {  TITLE: 'GST Number', Image:true },
            {  TITLE: 'PAN Number', Image:true },
            {  TITLE: 'CIN Number', Image:true  },
            {  TITLE: 'MSME Number', Image:true  },
            {  TITLE: 'Adhar Number', Image:true  },
            {  TITLE: 'DMS', Image:true  },
        ],
        IS_EXPAND:false,
        Image:false
    },
    {
        category_name:"Bank Detail",
        SUB_CAT:[
      {  TITLE: 'Bank Serial Number' },
      {  TITLE: 'Account Type' },
      {  TITLE: 'Bank Country' },
      {  TITLE: 'Bank Key IFSC' },
      {  TITLE: 'Bank Account' },
      {  TITLE: 'Account Holder Name' },
      {  TITLE: 'Bank Name' },
      {  TITLE: 'Bank City'},
      {  TITLE: 'Mode of Payment' ,ShowDropDown:true,Options : [
        {label: 'Online',value:"Online"},
        {label: 'Cash',value:"Cash"},
        {label: 'check' ,value:"check"},
        {label: 'nft ',value:"neft"},
        {label: 'rtgs ' ,value:"rtgs"},
       
      ]},
      {  TITLE: 'Cancel Check Proof', Image:true }
        ],
        IS_EXPAND:false,
        Image:false
    },
    {
        category_name:"Company Data",
        SUB_CAT:[ 
      {  TITLE: 'Currency*',ShowDropDown:true ,Options : [
        {label: 'USD',value:"USD"},
        {label: 'INR',value:"INR"},
        {label: 'check' ,value:"check"},
        {label: 'nft ',value:"neft"},
        {label: 'rtgs ' ,value:"rtgs"},
       
      ]},
      {  TITLE: 'Turnover*'  },
      {  TITLE: 'Company code*' },
      {  TITLE: 'Payment Term*' },
      {  TITLE: 'Inco Term*' },
      {  TITLE: 'Percurement Plant*' },
        ],
        IS_EXPAND:false,
        Image:false
    },
    {
        category_name:"Contact Person",
        SUB_CAT:[
          {
            sub_cat_title:"Details Of The User/Concern Person",
            TITLE:"Name",
          },
          
          {TITLE:"Employee Code"},


          {
            sub_cat_title:"Vendor",
              TITLE: 'Telephone/Fax' ,
          },

          
          {  TITLE: ' Email' },
          {  TITLE: ' Phone local' },
          {  TITLE: ' Owner Gender' },
          {  TITLE: ' Cellular Phone' },
          {  TITLE: ' Whats App Mobile' },
          {  TITLE: ' Birth date' },

          {
            sub_cat_title:"Vendor Contact Person",
              TITLE: 'Name with Post' ,
          },
          {  TITLE: 'Email' },
          {  TITLE: 'Mobile Number' },
          {
            sub_cat_title:"Promoter",
              TITLE: 'Promoter Name' ,
          },
          {  TITLE: 'Email' },
          {  TITLE: 'Mobile Number' },
          {  TITLE: 'Address'},
          {
            sub_cat_title:"Director/Partner/Proprietor's Name",
              TITLE: 'Name' ,
          },
          {  TITLE: 'Email' },
          {  TITLE: 'Mobile Number' },
      
        ],
        IS_EXPAND:false,
        Image:false
    }
])
useEffect(()=>{
    console.log(data);
    },[data])

    const expandField=(ClickedIndex)=>{
     
        let tempData=[]
        data.map((val)=>{
            tempData.push({...val,})
        })

        
        tempData.map((val,index)=>{
            if(index==ClickedIndex){
                val.IS_EXPAND=!val.IS_EXPAND
            }
            else{
                val.IS_EXPAND=false
            }
            
        })


        // console.log(tempData);

        setData(tempData)
    }
    const renderHeader=({item,index})=>{
        return(
            <>
            <TouchableOpacity 
        activeOpacity={0.8}
          onPress={()=>{
                expandField(index)

            }}
        style={[styles.header,{
          flexDirection:"row",
          justifyContent:"space-between",
          borderWidth:0.5
        }]}>
            <Text style={styles.headerText}>{item.category_name}</Text>
        {item.IS_EXPAND ?  <Feather name="chevron-up" size={20} color={colors.black}/>:<Feather name="chevron-down" size={20} color={colors.black}/>}
    </TouchableOpacity>
    
        {item.IS_EXPAND && 
         <FlatList data={item.SUB_CAT} renderItem={renderSubCategory}/>   }

        </>
      
        )
    }

    const renderSubCategory=({item,index})=>{

        // console.log("renderSubCategory",item);
        return(
            <View style={{backgroundColor:"white",
            padding:5,
             }}>
            <Text style={{fontWeight:"800",marginTop:5,borderRadius:15}}>{item?.sub_cat_title}</Text>
            <Text style={{fontWeight:"800",marginTop:5,borderRadius:15}}>{item.TITLE}</Text>

            <View style={{flexDirection:"row",justifyContent:"space-between",  }}>
             {item.ShowDropDown ?   <CustomDropdown Options={item.Options}/> :  <TextInput style={{margin:16,fontSize:16,borderWidth:1, width:300, borderRadius:15 }} 
            placeholder="Type Something" 
            backgroundColor="#F5FCFF"
            />}
           
            <TouchableOpacity style={{marginTop:20}} onPress={()=>{selectdoc()}}>
            {item.Image && <Image source={require("../../assets/file.png")} style={{
                width:40,
                height:40,
                
            }}/>}
            </TouchableOpacity> 
           
            
           
           </View>
</View>
        
      
        )
    }
  return (
    <Container>
        <VendorHeader>
        <CustomHeader centerComponent={<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 5, }}>
          
          <Typography numberOfLines={1} size={19} type={"bold"} color={"textPrimary"} >
            Section List
           </Typography>
           </View>} 
           
           rightComponent={
            <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate("")}>
                    <LottieAnimation
                        source={require('../../../src/assets/bell.json')}
                        loop={true}
                        speed={1}
                        // ref={ref}
                        // onAnimationFinish={trigger}
                        autoPlay={false}
                        style={{ width: 100, height: 40, marginBottom: -10, marginTop: -2 }}
                    />
                 </TouchableOpacity>
                {/* <View style={{ backgroundColor: 'red', width: 16, borderRadius: 10, alignItems: "center", position: 'absolute', right: 5, top: 8 }}>
                    {props.activity[0]?.po_data.length + props.activity[0]?.invoice_data.length > 0 && <Typography color="white" type='bold'>{props.activity[0]?.po_data.length + props.activity[0]?.invoice_data.length}</Typography>}
                </View>  */}
            </View>
        }
       />
       </VendorHeader>

       <Content>

     <FlatList style={{marginTop:30,}}
     data={data}
     renderItem={renderHeader}
     
     />

   
     
       </Content>
      
    </Container>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      marginTop:10,
      // backgroundColor:"orange"
      // borderRadius:15
      
    },
    titleText: {
      flex: 1,
      fontSize: 12,
      fontWeight: 'bold',
      
      
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 10,
      justifyContent:"space-between",
      borderRadius:15,
      marginTop:20
      
      
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
      justifyContent:"space-between"
      
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
      
    },
    icon: {
      paddingTop: 12,
  },
    // text: {
    //   fontSize: 16,
    //   color: '#606070',
    //   padding: 10,
    // },
    content: {
      paddingLeft: 10,
      
      //paddingRight: 10,
      // backgroundColor: '#fff',
    },
    TextInput:{
      // fontSize:10,
      // height:30,
      margin:12,
      // borderWidth:1,
      // padding:10,
      fontSize:16,
      // borderRadius:25
      
    },
    ontouch:{
      backgroundColor:"red",
      // height:50,
      padding:15,
      borderRadius:15,
      marginLeft:70,
      marginRight:70,
      
    },
    chevronDown: {
      fontFamily: 'FontAwesome',
      fontSize: 20,
    }
  });

export default Sectionlist