import React ,{useState} from 'react'
import { Text, View, StyleSheet, Image,FlatList, TouchableOpacity,TextInput, } from 'react-native';
import { not } from 'react-native-reanimated';

export default function Forum5({navigation}) {

const [ notifyList, setnotifyList] =useState([
  {
id:1,
name:"message",
image :require('../image/mes1.png')
},

{
id:2,
name:"notify",
image :require('../image/bell1.png'),
},

{
  id:3,
  name:"mike",
  image :require('../image/mike.png'),
  },
  




])



    return (
        <View style={styles.container}>
    
        
  
         
  
            <View style={styles.section}>
         
              <View style={styles.icons}>

  


              <TouchableOpacity onPress={()=>navigation.navigate('Forum4')}>
                <View style={styles.back}>
                <Image style={styles.icon1}
                    source={require('../image/mes1.png')}/>
                </View>
              </TouchableOpacity>
  
                <View style={styles.back1}>
                <Image style={styles.icon1}
                source={require('../image/bell1.png')}/>
                </View>
  
                <View style={styles.back1}>
                <Image style={styles.icon1}
                source={require('../image/mike.png')}/>
                </View>
  
             
              </View>
  
    
              
              <View style={styles.picture}>
               <Text style={styles.direct}>Direct Messages</Text>
                 
                <View style={styles.picsec}>
                  <Image style={styles.pic}
                  source={require('../image/pic1.png')}/>
                  <View style={styles.word}>
                    <Text style={styles.name}>Jane Doe</Text>
                    <Text style={styles.name1}>2</Text>
                  </View>
                </View>

                <View style={styles.picsec}>
                  <Image style={styles.pic}
                  source={require('../image/pic2.png')}/>
                  <View style={styles.word}>
                    <Text style={styles.name}>June Doe</Text>
                    <Text style={styles.name1}>1</Text>
                  </View>
                </View>

                <View style={styles.picsec}>
                  <Image style={styles.pic}
                  source={require('../image/pic3.png')}/>
                  <View style={styles.word}>
                    <Text style={styles.name}>John Doe</Text>
                  </View>
                </View>

                <View style={styles.picsec}>
                  <Image style={styles.pic}
                  source={require('../image/pic2.png')}/>
                  <View style={styles.word}>
                    <Text style={styles.name}>Joseph Doe</Text>
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
    section:{
      flexDirection:'row',
      backgroundColor:'black',
      height:'100%',
      width:'100%'
    },
    back:{
      backgroundColor:'#2AFD89',
      alignItems:'center',
      height:40,
      justifyContent:'center',
      borderRadius:5,
      marginBottom:20
    },
    back1:{
      backgroundColor:'black',
      alignItems:'center',
      height:40,
      justifyContent:'center',
      borderRadius:5,
      marginBottom:20,
    },
    icons:{
      padding:20,
      backgroundColor:'#292929',
      width:80,
      height:'100%'
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
      marginLeft:20,
      flexDirection:'row'
    },
    name:{
      color:'#2AFD89',
      fontWeight:'bold'
    },
    name1:{
      color:'black',
      fontSize:16,
      fontWeight:'bold',
      marginLeft:135,
      backgroundColor:'#2AFD89',
      paddingLeft:5,
      paddingRight:5,
      borderRadius:5
    },

 
  
    
     
    
  });
  