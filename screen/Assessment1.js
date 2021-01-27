import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList,TextInput } from 'react-native';

export default function Assessment1({navigation}) {
    return (
<View style={styles.container}>
    
  

 

    <ScrollView>

    <Text style={styles.words}>Because you have marketing in your profile</Text>

    <FlatList horizontal
    data= {[
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
    ]}
    renderItem ={({item}) =>
      <View style={styles.picture}>
       <View style={styles.inside}>
        <Image style={styles.pic}
        source={{uri:item.photo}}/>
        <Text style={styles.word1}>{item.name}</Text>
        <Text style={styles.word1}>{item.name1}</Text>
        <Text style={styles.word2}>{item.name2}</Text>
      </View>
      </View>

    }
    />



     <Text style={styles.words}>Trending Now</Text>


    <FlatList horizontal
    data= {[
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
    ]}
    renderItem ={({item}) =>
      <View style={styles.picture}>
       <View style={styles.inside}>
        <Image style={styles.pic}
        source={{uri:item.photo}}/>
        <Text style={styles.word1}>{item.name}</Text>
        <Text style={styles.word1}>{item.name1}</Text>
        <Text style={styles.word2}>{item.name2}</Text>
      </View>
      </View>

    }
    />

    <Text style={styles.words}>New Releases</Text>

    <FlatList horizontal
    data= {[
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
    ]}
    renderItem ={({item}) =>
      <View style={styles.picture}>
       <View style={styles.inside}>
        <Image style={styles.pic}
        source={{uri:item.photo}}/>
        <Text style={styles.word1}>{item.name}</Text>
        <Text style={styles.word1}>{item.name1}</Text>
        <Text style={styles.word2}>{item.name2}</Text>
      </View>
      </View>

    }
    />

    <Text style={styles.words}>Management</Text>

    <FlatList horizontal
    data= {[
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Management Skills",
        "name1":"Assessment Part 1",
        "name2":"15m Duration 70% to pass"
      },
      {
       "photo":"https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/edba22569a2f54cff05651b5e1af68ce",
        "name":"Project Planning",
        "name1":"Assessment",
        "name2":"13m Duration 65% to pass"
      },
    ]}
    renderItem ={({item}) =>
      <View style={styles.picture}>
       <View style={styles.inside}>
        <Image style={styles.pic}
        source={{uri:item.photo}}/>
        <Text style={styles.word1}>{item.name}</Text>
        <Text style={styles.word1}>{item.name1}</Text>
        <Text style={styles.word2}>{item.name2}</Text>
      </View>
      </View>

    }
    />
    
</ScrollView>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#424242'
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
  words:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
    padding:20,
    backgroundColor:'black'
  },
  picture:{
    flexDirection:'row',
    backgroundColor:'black',
    borderBottomWidth:8,
    borderColor:'#292929'
  },
  inside:{
    marginLeft:20,
  },
  pic:{
    width:160,
    height:100,
    borderRadius:8,
    marginBottom:12
  },
  word1:{
    color:'#2AFD89',
    fontWeight:'bold',
    fontSize:13
  },
  word2:{
    color:'grey',
    fontSize:12,
    marginTop:8,
    marginBottom:15
  }

  });
