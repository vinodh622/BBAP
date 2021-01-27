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
  
                <View style={styles.back1}>
                <Image style={styles.icon1}
                source={require('../image/bell1.png')}/>
                </View>
  
                <TouchableOpacity onPress={()=>navigation.navigate('Assessment')}>
                  <View style={styles.back}>
                  <Image style={styles.icon1}
                  source={require('../image/mike1.png')}/>
                  </View>
                </TouchableOpacity>
  
             
              </View>
  
    
              
              <View style={styles.picture}>
               <Text style={styles.direct}>Live Discussion</Text>
  
                <FlatList 
                data= {[
                {
                "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/305e43a08382fa510153ac0a54bb14c3",
                "name":"Marketing Sessions",
                "name1":"Are TikTok & Snapchat",
                "name2":"Effective Platforms for Politi...",
                "name3":"109 Online",
                },
                {
                "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/d1433e0552727fdd78966db8d8fbec8e",
                "name":"Sales Sessions",
                "name1":"Increase sales and sign ups",
                "name2":"by up to 15% with Social Pr...",
                "name3":"59 Online",
                },
                ]}
  
                renderItem ={({item}) =>
               
                <View style={styles.picsec}>
                  <Image style={styles.pic}
                    source={{uri:item.photo}}/>
                  <View style={styles.word}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name2}>{item.name1}</Text>
                    <Text style={styles.name2}>{item.name2}</Text>
                    <Text style={styles.name1}>{item.name3}</Text>
                  </View>
                </View>
                }/>
  
                
  
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
      fontSize:12
    },
    name2:{
      color:'white',
      fontSize:12
    }
  
    
     
    
  });
  