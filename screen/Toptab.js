import React from 'react'
import {View,Text ,StyleSheet ,Image ,TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Forum  from '../screen/Forum'
import Forum1 from '../screen/Forum1'
import Forum2 from '../screen/Forum2'
import Forum3 from '../screen/Forum3'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





const Tab = createMaterialTopTabNavigator();

export default function Toptab() {
  return (
      <View style={{flex:1 ,marginTop:20}}>





          

<View style={styles.section}>
          <View style={styles.searchbar}>
            <View style={styles.searchin}>
            <Image style={styles.search}
            source={require('../image/SearchWhite.png')}/>
            <TextInput placeholder='Search'
              placeholderTextColor='#FFFFFF'
              style={styles.input}/>
            </View>
            <Image style={styles.group}
            source={require('../image/Group42811.png')}/>
          </View>
        </View>
        

     



    <Tab.Navigator 
     tabBarOptions={{
        labelStyle: {
        
          textTransform: 'none',
        },
        activeTintColor:"#fff",
       inactiveTintColor:"#000",
        style: {
          
         
          backgroundColor: '#2AFD89',
        },
     
  
        indicatorStyle: {backgroundColor : '#FFF' ,borderBottomWidth:2 ,borderBottomColor:"#fff"},
  
  
  
  
      }}
    
    
    >
        <Tab.Screen name="Recent" component={Forum} />
        <Tab.Screen name="Popular" component={Forum1} />
        <Tab.Screen name="Sessions" component={Forum2} />
        <Tab.Screen name="Notifications" component={Forum3} />
      </Tab.Navigator>
      </View>

  


  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    section:{
      padding:20,
      justifyContent:'space-between',
      backgroundColor:'#2AFD89'
    },
    searchbar:{
      flexDirection:'row',
      backgroundColor:'#00D35F',
      justifyContent:'space-between',
      borderRadius:10,
      height:40,
      alignItems:'center'
    },
    searchin:{
      flexDirection:'row'
    },
    search:{
      width:22,
      height:22,
      marginLeft:10,
      marginRight:10,
      marginTop:7
    },
    input:{
      fontWeight:'bold',
      color:'#FFFFFF'
    },
    group:{
      width:20,
      height:20,
      marginRight:10
    },
    sectionword:{
      backgroundColor:'#2AFD89'
    },
    secwordinside:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:20,
      marginRight:20,
      backgroundColor:'#2AFD89',
    },
    text1:{
      fontWeight:'bold',
    },
    text2:{
        fontWeight:'bold',
        color:'white',
        borderBottomWidth:4,
        borderColor:'white',
        paddingBottom:10
      },
      section1:{
        padding:20,
        backgroundColor:'#292929'
      },
      textsec:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
      },
      business:{
        flexDirection:'row',
        marginTop:15,
      },
      businesssection:{
        width:100,
        height:120,
        marginRight:10
      },
      busbackground:{
        width:'100%',
        height:'100%',
      },
      buslogo:{
        width:30,
        height:30
      },
      bustext:{
        color:'white',
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        marginTop:50
      },
      bustext1:{
        color:'#2AFD89',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:12
      },
      section2:{
        flexDirection:'row',
        padding:20,
        backgroundColor:'black',
        justifyContent:'space-between'
      },
      round:{
        width:50,
        height:50
      },
      sec2text:{
        color:'#2AFD89',
        fontWeight:'bold',
        paddingLeft:10
      },
      sec2text1:{
        color:'grey',
        fontSize:12,
        paddingLeft:10
      },
      end:{
       alignItems:'flex-end'
      },
      threedot:{
        width:25,
        height:19,
        marginLeft:20
      },
      sec2text2:{
        color:'grey',
        fontSize:12,
      },
      diff:{
        flexDirection:'row'
      },
      twotext:{
        color:'white',
        paddingLeft:20
      },
      section3:{
        padding:20,
        borderBottomWidth:10,
        borderColor:'#292929'
      },
      pic1:{
        width:'100%',
        height:160
      },
      icons:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
      },
      up:{
        width:15,
        height:15,
      },
      rating:{
        color:'#2AFD89',
        fontSize:12
      },
      logo:{
        flexDirection:'row'
      },
      share:{
        width:15,
        height:16
      }
    
      
     
    
    
     
    });