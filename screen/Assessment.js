import React from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity,TextInput } from 'react-native';

export default function Assessment({navigation}) {
    return (
        <View style={styles.container}>
       

      
      
         <FlatList 
        data= {[
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/314874cb76d47add0754170440de9044",
            "name":"Management",
          },
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/89a72754f71d2af6dc905e7e57f7b8d3",
            "name":"Leardership",
          },
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/bfcfc96e0be8d7d292af8b42eaea3fb4",
            "name":"Creative",
          },
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/fd338858c5ba59cb17a9e8fce234ac34",
            "name":"Marketing",
          },
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/424bf09e6d8fcb3b96b909f0575b169c",
            "name":"Technology",
          },
          {
           "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/7f85c4fe0c2bfbadf4fce7ffb5664ba3",
            "name":"Business",
          },
          ]}
        
        renderItem ={({item}) =>
        
         <View style={styles.end}>
          <Image style={styles.picture}
          source={{uri:item.photo}}/>
          <Text style={styles.endtext}>{item.name}</Text>
         </View>
        
        }
        />
       

    </View>
    )
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