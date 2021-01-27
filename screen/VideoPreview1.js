import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function VideoPreview1({navigation}) {
    return (
        <View style={styles.container}>

    
      <View style={styles.section2}>

        

         
          
        <ScrollView>
        <View style={styles.chapter}>

        <Text style={styles.chaptertext}>Chapters</Text>

        <FlatList horizontal
         showsHorizontalScrollIndicator={false}
        data={[
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "course": "Course 1 : E3",
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "course": "Course 1 : E2",
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "course": "Course 1 : E1",
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "course": "Course 1 : E4",
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "course": "Course 1 : E5",
        },
        ]}
      renderItem={({item}) =>  
   
        <View style={styles.car}>
        
          <View style={styles.carsection}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={styles.carbackground}
              source={{uri:item.photo}}>

              <Image style={styles.play1}
              source={require('../image/play-button.png')}/>

              <Text style={styles.course}>{item.course}</Text>

              <View style={styles.dot}>
                <Image style={styles.info}
                source={require('../image/information.png')}/>
                <Image style={styles.threedot}
                source={require('../image/menu.png')}/>
              </View>
            </ImageBackground>
          </View>
        </View>
        }/>
      </View>

        <View style={styles.relatedVideos}>
        <Text style={styles.relatedtext}>Related Videos</Text>

        <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "&BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TOSUCCESS",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "MANAGEMENT",
        },
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "&BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TOSUCCESS",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "MANAGEMENT",
        },
        ]}
      renderItem={({item}) => 

        <View style={styles.business}>
          <View style={styles.businesssection}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={styles.busbackground}
              source={{uri:item.photo}}>
              <Image style={styles.buslogo}
              source={{uri:item.photo1}}/>
              <Text style={styles.bustext}>{item.name}</Text>
              <Text style={styles.bustext1}>{item.name1}</Text>
          
            </ImageBackground>
          </View>
        </View>
      }/>
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
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
     back:{
      width:'100%',
      height:'100%',
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
    chapter:{
      padding:10,
      borderBottomWidth:10,
      borderBottomColor:'#292929'
    },
    chaptertext:{
      color:'grey',
      fontWeight:'bold',
      marginLeft:5,
      marginBottom:15
    },
    car: {
      flexDirection: 'row',
      marginBottom:10
    },
    carsection: {
      width:100,
      height:120,
      marginBottom:20,
      marginRight:10,
      marginLeft:5
    },
    carbackground: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    play1: {
      width: 25,
      height: 25,
      marginTop: 20,
    },
    course: {
      color: '#2AFD89',
      fontSize: 12,
      marginTop: 10,
      fontWeight: 'bold',
    },
    dot:{
      flexDirection: 'row',
      width: 100,
      height: 30,
      backgroundColor: '#212121',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'relative',
      top: 30,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    info: {
      width: 15,
      height: 15,
    },
    threedot: {
      width: 13,
      height: 13,
    },
    relatedVideos:{
      padding:10,
    },
    relatedtext:{
      color:'grey',
      fontWeight:'bold',
      marginLeft:5,
      marginBottom:10
    },
    business: {
      flexDirection: 'row',
      marginBottom:10
    },
    businesssection: {
      width:100,
      height:120,
      marginLeft:5,
      marginRight:10,
      marginBottom:20,
      marginTop:10,
    },
    busbackground: {
      width: '100%',
      height: '100%',
    },
    buslogo: {
      width: 30,
      height: 30,
    },
    bustext: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center',
      marginTop:50,
    },
    bustext1: {
      color: '#2AFD89',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 12,
    },
    
  
  
  });
  