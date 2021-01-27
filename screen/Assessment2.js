import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity,TextInput } from 'react-native';

export default function Assessment2({navigation}) {
    return (
        <View style={styles.container}>
   


        <ScrollView>
         <View style={styles.words1}>
          <Text style={styles.textw1}>Passed</Text>
          <Text style={styles.textw2}>See All</Text>
        </View>

      <FlatList
        data={[
        {
          "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
           "name":"Entrepreneur Assessm...",
           "name1":"30m Duration 82% Pass",
           "name2":"Took on 20 Apr 2020",
           "name3":"Passed"
        },
        {
          "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
           "name":"Marketing Assessment",
           "name1":"30m Duration 86% Pass",
           "name2":"Took on 20 Apr 2020",
           "name3":"Passed"
        },
        {
          "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
           "name":"Sales Assessment",
           "name1":"30m Duration 79% Pass",
           "name2":"Took on 5 Nov 2020",
           "name3":"Passed"
        }
      ]}
        renderItem ={({item}) =>

          <View style={styles.checking}>
            <View style={styles.section2}>
              <Image style={styles.one}
              source={{uri:item.photo}}/>
              <View style={styles.section2text}>
              <Text style={styles.sec2text}>{item.name}.</Text>
              <Text style={styles.sec2text1}>{item.name1}</Text>
              <Text style={styles.sec2text1}>{item.name3}</Text>
              </View>
            </View>
            <View style={styles.end}>
              <Text style={styles.endtext}>{item.name3}</Text>
            </View>
          </View>
        }
      />

      
      <View style={styles.words1}>
        <Text style={styles.textw1}>Available to Retake</Text>
        <Text style={styles.textw2}>See All</Text>
      </View>

      
               
        <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Leadership assessme...</Text>
            <Text style={styles.sec2text1}>15m Duration scored 49%</Text>
            <Text style={styles.sec2text1}>Available to retake</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Text style={styles.endtext}>Retake</Text>
          </View>
        </View>

         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Marketing Assessment</Text>
            <Text style={styles.sec2text1}>30m Duration scored 67%</Text>
            <Text style={styles.sec2text1}>Available to retake on 20 Jan 2020</Text>
            </View>
          </View>
          <View style={styles.end1}>
            <Text style={styles.endtext1}>Retake</Text>
          </View>
        </View>

        
         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Business Ethics Asses..</Text>
            <Text style={styles.sec2text1}>1m Duration scored 61%</Text>
            <Text style={styles.sec2text1}>Available to retake on 27 Jan 2020</Text>
            </View>
          </View>
          <View style={styles.end1}>
            <Text style={styles.endtext1}>Retake</Text>
          </View>
        </View>
    
    
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191919'
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
    words1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    backgroundColor:'#292929'
  },
  textw1:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
  },
  textw2:{
    color:'#2AFD89',
    fontSize:12,
  },
   checking:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'black',
    borderBottomWidth:7,
    borderColor:'#292929'
  },
  section2:{
    flexDirection:'row',
    alignItems:'center',
  },
  one:{
    width:90,
    height:90,
    marginLeft:20
  },
  sec2text:{
    color:'#2AFD89',
    fontSize:13,
    marginLeft:15,
  },
  sec2text1:{
    color:'grey',
    fontSize:12,
    marginLeft:15
  },
  end:{
    marginRight:20,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#2AFD89'
  },
  end1:{
    marginRight:20,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey'
  },
  endtext:{
    color:'#2AFD89',
    fontSize:12,
  },
  endtext1:{
    color:'grey',
    fontSize:12,
  },
  
});

    
