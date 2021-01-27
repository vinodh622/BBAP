import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function LogIn({navigation}) {
    return (
      <View style={styles.container}>

        <View style={styles.section1}>
  
          <Image style={styles.logo}
           source={require('../image/Sessions-icon.png')}/>
  
          <Text style={styles.text1}>Welcome to Sessions</Text>
  
          <View style={styles.number}>
            <View style={styles.countrycode}>
              <Text style={styles.no}>+60</Text>
              <Image style={styles.downarrow}
              source={require('../image/down1.png')}/>
            </View>
  
            <View style={styles.inputnumber}>
              <TextInput 
              keyboardType='numeric'
              style={styles.input}/>
            </View>
            
          </View>
  
          <View style={styles.sec1in}>
            <TextInput style={styles.input1}/>
            <Image style={styles.eye}
            source={require('../image/visibility.png')}/>
          </View>
  
        </View>
      
  
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}
         style={styles.section2}>
  
          <Text style={styles.login}>Log In</Text>
         
        </TouchableOpacity>
  
        <View style={styles.section3}>
          <Text style={styles.signup}>Or Sign up with</Text>
  
           <View style={styles.socialmedia}>
              <View style={styles.fb}>
                <Image style={styles.fbicon}
                source={require('../image/fbicon.png')}/>
              </View>
                  
              <View style={styles.google}>
                <Image style={styles.googleicon}
                source={require('../image/Gicon.png')}/>
              </View>
  
              <View style={styles.apple}>
                <Image style={styles.appleicon}
                source={require('../image/appleicon.png')}/>
              </View>
  
              <View style={styles.apple}>
                <Image style={styles.appleicon}
                source={require('../image/mesicon.png')}/>
              </View>
            </View>
  
            <Text style={styles.endtext1}>Already have an account?
            <Text style={styles.endtext2}> LOG IN</Text></Text>
        </View>
  
       
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    section1:{
      flex:2,
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    logo:{
      width:130,
      height:120
    },
    text1:{
      color:'#2AFD89',
      fontWeight:'bold',
      fontSize:18
    },
    number:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'80%'
    },
    countrycode:{
     flexDirection:'row',
      alignItems:'center',
      borderColor:'white',
      borderBottomWidth:1,
      width:'25%',
      justifyContent:'center',
    },
    no:{
      fontSize:22,
      color:'white',
      paddingBottom:5,
      paddingRight:8,
      paddingLeft:2
    },
    downarrow:{
      width:18,
      height:18,
    },
    inputnumber:{
      width:'65%',
      borderColor:'white',
      borderBottomWidth:1,
    },
    input:{
      color:'white',
      letterSpacing:5,
      fontSize:20
    },
    sec1in:{
      flexDirection:'row',
      borderBottomColor:'white',
      borderBottomWidth:1,
      alignItems:'center',
      width:'80%',
      justifyContent:'space-between',
    },
    input1:{
      fontSize:22,
      color:'white',
      width:'85%',
    },
    eye:{
      width:30,
      height:30,
    },
    section2:{
      flex:0.5,
      alignItems:'center',
     },
    login:{
      color:'#191919',
      width:'80%',
      textAlign:'center',
      borderWidth:1,
      borderColor:'#2AFD89',
      height:45,
      borderRadius:10,
      paddingVertical:10,
      fontWeight:'bold',
      marginTop:15,
      backgroundColor:'#2AFD89'
    },
    section3:{
      flex:1,
      justifyContent:'space-evenly',
    },
    signup:{
      color:'#ACACAC',
      textAlign:'center',
    },
    socialmedia:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      marginLeft:25,
      marginRight:25,
      marginBottom:15
    },
     fb:{
      width:55,
      height:55,
      backgroundColor:'#2B6DFF',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    fbicon:{
      height:23,
      width:12
    },
    google:{
      width:55,
      height:55,
      backgroundColor:'#E74233',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    googleicon:{
      height:23,
      width:22
    },
    apple:{
      width:55,
      height:55,
      backgroundColor:'#FFFFFF',
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    appleicon:{
      height:28,
      width:24
    },
     endtext1:{
      color:'#2AFD89',
      textAlign:'center', 
    },
    endtext2:{
      fontWeight:'bold',
      borderBottomWidth:1,
      borderBottomColor:'#2AFD89',
    },
    
  });
  