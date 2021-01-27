import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function VideoPreview({navigation}) {
    return (
        <View style={styles.container}>


      
        <View style={styles.section2}>
        


         
  
          <ScrollView>
          <Text style={styles.text3}>20m Published 18 Nov 2020</Text>
  
          <Text style={styles.text4}>Often stories of success involve struggle, to a degree that it</Text>
          <Text style={styles.text4}>could be easy to assume from the outside that overcoming</Text>
          <Text style={styles.text4}>struggle was the only way</Text>
  
  
          <View style={styles.instructor}>
            <Text style={styles.text5}>Instructor</Text>
            <View style={styles.insimagesection}>
              <Image style={styles.ro1image}
              source={require('../image/ro1.png')}/>
              <Text style={styles.james}>James Lawrence</Text>
            </View>
          </View>
          
          <Text style={styles.text6}>Skills Covered in this course</Text>
  
          <View style={styles.teamworksection}>
            <Text style={styles.teamwork}>Teamwork</Text>
            <Text style={styles.teamwork}>Advertising</Text>
            <Text style={styles.teamwork}>Communication</Text>
          </View>
  
          
          <View style={styles.instructor}>
            <Text style={styles.text5}>4,316 Likes</Text>
            <View style={styles.insimagesection}>
              <Image style={styles.ro1image}
              source={require('../image/ro1.png')}/>
              <Text style={styles.james}>4,136 members like this</Text>
            </View>
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
      flex:2
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
    text3:{
      color:'grey',
      fontWeight:'bold',
      marginLeft:20,
      fontSize:13,
      marginTop:10,
      marginBottom:8
    },
    text4:{
      color:'white',
      fontSize:13,
      marginLeft:20,
    },
    instructor:{
      height:120,
      borderTopColor:'#292929',
      borderBottomColor:'#292929',
      borderBottomWidth:8,
      borderTopWidth:8,
      marginTop:20,
    },
    text5:{
      color:'grey',
      marginLeft:20,
      marginTop:10
    },
    insimagesection:{
      flexDirection:'row',
      marginLeft:20,
      marginTop:10
    },
    ro1image:{
      width:50,
      height:50,
    },
    james:{
      color:'white',
      marginLeft:20,
      paddingVertical:15,
      fontSize:12
    },
    text6:{
      color:'grey',
      marginLeft:20,
      fontSize:13,
      marginTop:10
    },
    teamworksection:{
      flexDirection:'row',
      marginLeft:20,
      marginTop:10,
    },
    teamwork:{
      color:'grey',
      borderWidth:1,
      borderColor:'grey',
      borderRadius:3,
      marginRight:15,
      fontSize:13,
      paddingLeft:10,
      paddingRight:10
    }
  
  });
  