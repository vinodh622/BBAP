import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView,TouchableOpacity, TextInput } from 'react-native';

export default function VideoPreview2({navigation}) {
    return (
    <View style={styles.container}>

    
    
      <View style={styles.section2}>
      


      
          <Text style={styles.disscussion}>Disscussion</Text>
          
          <ScrollView>
          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p1.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>Jane Doe </Text>
              <Text style={styles.pic1text1}>I enjoy this video!</Text>
            </View>
          </View>
          
          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p2.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>John Doe </Text>
              <Text style={styles.pic1text1}>The speaker relay the topic well</Text>
            </View>
          </View>

          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p3.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>Jane Doe </Text>
              <Text style={styles.pic1text1}>I enjoy this video!</Text>
            </View>
          </View>
          
          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p4.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>John Doe </Text>
              <Text style={styles.pic1text1}>The speaker relay the topic well</Text>
            </View>
          </View>

          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p1.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>Jane Doe </Text>
              <Text style={styles.pic1text1}>I enjoy this video!</Text>
            </View>
          </View>

          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p2.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>JohnDoe </Text>
              <Text style={styles.pic1text1}>The speaker relay the topic well</Text>
            </View>
          </View>

          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p3.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>Jane Doe </Text>
              <Text style={styles.pic1text1}>I enjoy this video!</Text>
            </View>
          </View>

          <View style={styles.disscussionimage}>
            <Image style={styles.pic1}
            source={require('../image/p4.png')}/>
            <View style={styles.twotext}>
              <Text style={styles.pic1text}>John Doe </Text>
              <Text style={styles.pic1text1}>The speaker relay the topic well.</Text>
            </View>
          </View>

          <View style={styles.inputsection}>
            <TextInput 
            placeholder='Leave a comment'
            placeholderTextColor='white'
            style={styles.input}>
            </TextInput>

            <Image style={styles.send}
              source={require('../image/Iconly-Light-Send.png')}/>
    

          </View>
      </ScrollView>
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
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    round:{
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center'
    },
    inside:{
      width:20,
      height:25
    },
    back:{
      width:'100%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    section2:{
      flex:2,
    },
    title:{
      color:'white',
      fontWeight:'bold',
      marginLeft:20,
      marginTop:10,
      fontSize:18
    },
    logo:{
      flexDirection:'row',
      marginLeft:20,
      marginRight:20,
      marginTop:15,
      justifyContent:'space-between'
    },
    iconone:{
      flexDirection:'row'
    },
    one:{
      width:25,
      height:25,
      marginRight:35
    },
    two:{
      width:25,
      height:25,
    },
    overview:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginLeft:20,
      marginRight:20,
    },
    text1:{
      color:'white',
      fontWeight:'bold',
      borderBottomWidth:4,
      borderBottomColor:'white',
    },
    text2:{
      color:'white',
      fontWeight:'bold',
      marginBottom:10
    },
    threewords:{
      height:60,
      justifyContent:'flex-end',
      borderTopWidth:12,
      borderTopColor:'#292929',
      borderBottomWidth:10,
      borderBottomColor:'#292929',
      marginTop:10
    },
    disscussion:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
      marginLeft:20,
      marginTop:10,
      marginBottom:10
    },
    disscussionimage:{
      flexDirection:'row'
    },
    pic1:{
      width:60,
      height:60,
      marginLeft:20,
      marginTop:10
    },
    pic1text:{
      color:'#2AFD89',
      fontWeight:'bold',
      marginBottom:5
    },
    pic1text1:{
      color:'grey',
      fontSize:12,
    },
    twotext:{
      justifyContent:'center',
      marginLeft:10,
    },
    inputsection:{
      marginLeft:20,
      marginRight:20,
      marginTop:30,
      marginBottom:30,
      borderColor:'#FFFFFF',
      borderWidth:1,
      height:40,
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    input:{
      marginLeft:10,
      color:'#FFFFFF'
    },
    send:{
      width:25,
      height:25,
      marginRight:10
    }
   
   
  });
  
  
  
  
