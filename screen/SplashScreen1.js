import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function SplashScreen1({navigation}) {
    return (
        <View style={styles.container}>
     
        <View style={styles.section}>
          <Image style={styles.logo}
          source={require('../image/Sessions-icon.png')}/>
        </View> 
  
        <View style={styles.section1}>
          <Image style={styles.dot}
          source={require('../image/3dot.png')}resizeMode='contain'/>
  
  
          <Text style={styles.word}>Welcome</Text>
          <Text style={styles.word1}>Want to excel in business?</Text>
          <Text style={styles.word1}>Congratulations, you're already one step ahead.</Text>
  
          <TouchableOpacity onPress ={()=> navigation.navigate('SplashScreen2')}
           style={styles.button}>
          <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
          
          <Text style={styles.word2}>Already have an account?
          <Text style={styles.word3}> LOG IN</Text></Text>
         
        </View>        
  
  
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#191919'
    },
    section:{
      flex:1.2,
      justifyContent:'center',
      alignItems:'center',
    },
    logo:{
      width:200,
      height:200,
      marginBottom:20
    },
    section1:{
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
    },
    dot:{
      width:50,
      height:30,
      marginBottom:20,
    },
   word:{
      color:'#2AFD89',
      fontWeight:'bold',
      fontSize:16,
      marginBottom:20
    },
    word1:{
      color:'#FFFFFF',
      fontSize:13
    },
    button:{
      width:'80%',
      borderColor:'#2AFD89',
      borderWidth:1,
      borderRadius:10,
      height:45,
      marginTop:50,
      justifyContent:'center',
      alignItems:'center'
    },
    next:{
      color:'#2AFD89',
      fontWeight:'bold',
    },
    word2:{
      color:'#2AFD89',
      marginTop:25,
      marginBottom:25
    },
    word3:{
      fontWeight:'bold',
      borderBottomWidth:1,
      borderBottomColor:'#2AFD89'
    }
    
  });
