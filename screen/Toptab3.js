import React from 'react'
import {View,Text ,StyleSheet ,Image ,TextInput ,ImageBackground} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Assessment  from '../screen/Assessment'
import Assessment1 from '../screen/Assessment1'
import Assessment2 from '../screen/Assessment2'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





const Tab = createMaterialTopTabNavigator();

export default function Toptab3() {
  return (
      <View style={{flex:1 ,marginTop:20}}>

<View style={styles.section1}>
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
        <Tab.Screen name="Discover" component={Assessment} />
        <Tab.Screen name="Topics" component={Assessment1} />
        <Tab.Screen name="My Certificates" component={Assessment2} />
      </Tab.Navigator>
      </View>

  


  );
}

const styles = StyleSheet.create({
  
      
     
    container: {
        flex: 1,
        backgroundColor:'#292929'
      },
      section1:{
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
      section1word:{
        backgroundColor:'#2AFD89'
      },
      sec1wordinside:{
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
        paddingBottom:10,
        width:75,
        textAlign:'center'
      },
      end:{
        flexDirection:'row',
        backgroundColor:'#191919',
        padding:10,
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginTop:10
      },
      picture:{
        width:40,
        height:40,
        marginLeft:30
      },
      endtext:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        paddingLeft:20
      }
     
     
    
     
   
    });