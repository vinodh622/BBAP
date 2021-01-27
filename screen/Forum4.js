import React from 'react'
import { Text, View, StyleSheet, Image,FlatList, TouchableOpacity,TextInput } from 'react-native';

export default function Forum5({navigation}) {
    return (
        <View style={styles.container}>
    
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
  
          <View style={styles.section1word}>
            <View style={styles.sec1wordinside}>
              <Text style={styles.text1}>Recent</Text>
              <Text style={styles.text1}>Popular</Text>
              <Text style={styles.text1}>Sessions</Text>
              <Text style={styles.text2}>Notifications</Text>
            </View>
          </View>
  
            <View style={styles.section}>
         
              <View style={styles.icons}>
                <View style={styles.back1}>
                <Image style={styles.icon1}
                    source={require('../image/mes.png')}/>
                </View>
  
                <TouchableOpacity onPress={()=>navigation.navigate('Forum5')}>
                  <View style={styles.back}>
                  <Image style={styles.icon1}
                  source={require('../image/bell.png')}/>
                  </View>
                </TouchableOpacity>
  
                <View style={styles.back1}>
                <Image style={styles.icon1}
                source={require('../image/mike.png')}/>
                </View>
  
             
              </View>
  
    
              
              <View style={styles.picture}>
               <Text style={styles.direct}>Notifications</Text>

               <View style={styles.picsec}>
                <Image style={styles.pic}
                  source={require('../image/pic1.png')}/>
                <View style={styles.word}>
                  <Text style={styles.name}>Entrepreneur Sessions</Text>
                  <Text style={styles.name1}>Jane Doe commented on</Text>
                  <Text style={styles.name1}>your thread</Text>
                  <Text style={styles.name2}>9m Ago</Text>
                </View>
              </View>

              <View style={styles.picsec}>
                <Image style={styles.pic}
                  source={require('../image/pic2.png')}/>
                <View style={styles.word}>
                  <Text style={styles.name}>Sales Sessions</Text>
                  <Text style={styles.name1}>John Doe added a new</Text>
                  <Text style={styles.name1}>discussion</Text>
                  <Text style={styles.name2}>23m Ago</Text>
                </View>
              </View>

              <View style={styles.picsec}>
                <Image style={styles.pic}
                  source={require('../image/pic3.png')}/>
                <View style={styles.word}>
                  <Text style={styles.name3}>Sales Sessions</Text>
                  <Text style={styles.name1}>June Doe added a new</Text>
                  <Text style={styles.name1}>discussion</Text>
                  <Text style={styles.name2}>4m Ago</Text>
                </View>
              </View>

              <View style={styles.picsec}>
                <Image style={styles.pic}
                  source={require('../image/pic1.png')}/>
                <View style={styles.word}>
                  <Text style={styles.name3}>Marketing Sessions</Text>
                  <Text style={styles.name1}>June Doe added a new</Text>
                  <Text style={styles.name1}>discussion</Text>
                  <Text style={styles.name2}>19m Ago</Text>
                </View>
              </View>

              <View style={styles.picsec}>
                <Image style={styles.pic}
                  source={require('../image/pic2.png')}/>
                <View style={styles.word}>
                  <Text style={styles.name3}>Entrepreneur Sessions</Text>
                  <Text style={styles.name1}>ane Doe added a new</Text>
                  <Text style={styles.name1}>your thread</Text>
                  <Text style={styles.name2}>22m Ago</Text>
                </View>
              </View>
                
  
               
  
               
  
                
  
              </View>
  
               
          </View>
  
         
         
      </View>   
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      paddingBottom:10
    },
    back1:{
      backgroundColor:'black',
      alignItems:'center',
      height:40,
      justifyContent:'center',
      borderRadius:5,
      marginBottom:20
    },
    section:{
      flexDirection:'row',
      backgroundColor:'black',
      height:'100%',
      width:'100%'
    },
    icons:{
      padding:20,
      backgroundColor:'#292929',
      width:80,
      height:'100%'
    },
    back:{
      backgroundColor:'#2AFD89',
      alignItems:'center',
      height:40,
      justifyContent:'center',
      borderRadius:5,
      marginBottom:20
    },
    icon1:{
      width:30,
      height:30,
    },
    direct:{
      color:'white',
      fontSize:18,
      fontWeight:'bold',
      padding:15
    },
    picsec:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:15,
      marginBottom:20,
    },
    pic:{
      width:45,
      height:45
    },
    word:{
      marginLeft:20
    },
    name:{
      color:'#2AFD89',
      fontWeight:'bold'
    },
    name1:{
      color:'#7D7D7D',
      fontSize:12,
      fontWeight:'bold'
    },
    name2:{
      color:'#7D7D7D',
      fontSize:12
    },
    name3:{
      color:'#7D7D7D',
      fontWeight:'bold'
    }
   
    
  });
  