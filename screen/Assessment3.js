import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Assessment3({navigation}) {
    return (
        <View style={styles.container}>
        <ScrollView>
        <Image style={styles.picture}
        source={require('../image/group.png')}/>
  
        
        <View style={styles.head}>
        <Text style={styles.word}>Management Skills Assessment</Text>
        <Text style={styles.word}>Part 1</Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.word1}>Multiple Choice</Text>
          <Text style={styles.word2}>Data</Text>
          <Text style={styles.word2}>Charts</Text>
        </View>

  
        <View style={styles.section1}>
          <Text style={styles.word3}>Before you begin</Text>
          <Text style={styles.word4}>Each quiz must be completed in one session; make sure
          <Text style={styles.word4}>you have a stable internet connection & you're finished
          <Text style={styles.word4}>before exiting.</Text></Text></Text>
  
          <Text style={styles.word4}>If you don't pass, your result won't be displayed or shared.</Text>
        </View>
  
        <View style={styles.section2}>
          <Text style={styles.word3}>Overview</Text>
          <Text style={styles.word4}>Answer 15-20 timed, multiple-choice questions</Text>
  
          <View style={styles.inside}>
            <Image style={styles.clock}
            source={require('../image/clock.png')}/>
            <Text style={styles.word5}>15 minutes</Text>
            <Text style={styles.word6}>duration</Text>
          </View>
  
           <View style={styles.inside}>
            <Image style={styles.clock}
            source={require('../image/plus.png')}/>
            <Text style={styles.word5}>70th percentile</Text>
            <Text style={styles.word6}>required to pass</Text>
          </View>
  
           <View style={styles.inside}>
            <Image style={styles.clock}
            source={require('../image/calender.png')}/>
            <Text style={styles.word5}>Retry in 3 months</Text>
            <Text style={styles.word6}>if you don't pass</Text>
          </View>
        </View>
  
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={styles.section3}>
          <Text style={styles.word7}>Star Assessment</Text>
        </View>
        </TouchableOpacity>
      
  
         
      </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    picture:{
      width:'100%',
      height:200
    },
    head:{
      backgroundColor:'black',
      paddingTop:10,
      
    },
    word:{
      fontWeight:'bold',
      fontSize:18,
      paddingLeft:20,
       color:'white',
     },
    section:{
      flexDirection:'row',
      backgroundColor:'black',
      height:45
    },
    word1:{
      fontSize:12,
      color:'grey',
      borderColor:'grey',
      borderWidth:2,
      borderRadius:4,
      width:100,
      textAlign:'center',
      marginLeft:20,
      marginTop:10,
      height:22,
      paddingVertical:2
    },
     word2:{
      fontSize:12,
      color:'grey',
      borderColor:'grey',
      borderWidth:2,
      borderRadius:4,
      width:60,
      textAlign:'center',
      marginLeft:10,
      marginTop:10,
      height:22,
      paddingVertical:2
    },
    section1:{
      backgroundColor:'black',
      paddingLeft:20,
      paddingTop:20,
      paddingBottom:20,
      borderBottomWidth:10,
      borderColor:'#292929',
      borderTopWidth:10,
    },
    word3:{
      color:'grey',
    },
    word4:{
      color:'white',
     paddingTop:10
    },
    section2:{
      backgroundColor:'black',
      paddingLeft:20,
      paddingTop:20,
      paddingBottom:20,
    },
    inside:{
      flexDirection:'row',
      marginTop:15
    },
    clock:{
      width:20,
      height:20
    },
    word5:{
      color:'#2AFD89',
      paddingLeft:10,
      paddingRight:6
    },
    word6:{
      color:'white'
    },
    section3:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#292929',
      height:120,

    },
    word7:{
      backgroundColor:'#2AFD89',
      width:'80%',
      height:40,
      fontWeight:'bold',
      fontSize:18,
      borderRadius:5,
      textAlign:'center',
      paddingVertical:6
    }
    
    
     
    
  });
  