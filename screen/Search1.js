import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Search1({navigation}) {
    return (
        <View style={styles.container}>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate('Forum')}>
       <View style={styles.section}>

          <View style={styles.searchbar}>
            <View style={styles.searchin}>
              <Image style={styles.search}
              source={require('../image/Search.png')}/>
              <TextInput placeholder='Management'
              placeholderTextColor='#FFFFFF'
              style={styles.input}/>
            </View>
            <Image style={styles.group}
            source={require('../image/Group428.png')}/>
          </View>

          <View style={styles.words}>
            <Text style={styles.text}>Videos</Text>
            <Text style={styles.text1}>See All</Text>
          </View>
        </View>
        </TouchableOpacity>



      <View style={styles.section1}>
        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis1.jpg')}/>
        </View>

        <View  style={styles.insidesec1}>
          <View>
            <Text style={styles.one}>Leadership Management</Text>
            <Text style={styles.two}>James Lawrence</Text>
          </View>

          <View>
          <Image style={styles.bold}
          source={require('../image/Bold.png')}/>
          </View>
        </View>
      </View>

      <View style={styles.section1}>
        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis2.jpg')}/>
        </View>

        <View  style={styles.insidesec1}>
          <View>
            <Text style={styles.one}>Business Management</Text>
            <Text style={styles.two}>Jia Jiang</Text>
          </View>

          <View>
          <Image style={styles.bold}
          source={require('../image/Bold.png')}/>
          </View>
        </View>
      </View>

    
    
      <View style={styles.subhead}>
        <Text style={styles.textsub}>Forums</Text>
        <Text style={styles.textsub1}>See All</Text>
      </View>
   


      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis1.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Supporting other on</Text>
          <Text style={styles.one}>Management. Discuss</Text>

          <View style={styles.part}>
            <Text style={styles.two}>2 Hours Ago</Text>
            <View style={styles.part1}>
              <Text style={styles.two1}>12k</Text>
              <Image style={styles.pen}
              source={require('../image/pen.png')}/>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis2.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Best in class Management and</Text>
          <Text style={styles.one}>Leadership Focus Topics</Text>

          <View style={styles.part}>
            <Text style={styles.two}>8 Hours Ago</Text>
            <View style={styles.part1}>
              <Text style={styles.two1}>3.1k</Text>
              <Image style={styles.pen}
              source={require('../image/pen.png')}/>
            </View>
          </View>
        </View>
      </View>


    
      <View style={styles.subhead}>
        <Text style={styles.textsub}>Assessments</Text>
        <Text style={styles.textsub1}>See All</Text>
      </View>


      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis1.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one1}>Management Skills Assessment</Text>
          
          <View style={styles.part2}>
            <Text style={styles.two}>15m Duration</Text>

            <View style={styles.part1}>
            <Text style={styles.two1}>70% to pass</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis2.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one1}>Project Planning Management Assessment</Text>
         

          <View style={styles.part2}>
            <Text style={styles.twoassess}>30m Duration</Text>
            <View style={styles.part1}>
              <Text style={styles.two1assess}>65% to pass</Text>
              
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis1.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one1}>Management Skills Assessment</Text>
          
          <View style={styles.part2}>
            <Text style={styles.two}>15m Duration</Text>

            <View style={styles.part1}>
            <Text style={styles.two1}>70% to pass</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/dis1.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one1}>Project Planning Management Assessment</Text>
         

          <View style={styles.part2}>
            <Text style={styles.twoassess}>30m Duration</Text>
            <View style={styles.part1}>
              <Text style={styles.two1assess}>65% to pass</Text>
              
            </View>
          </View>
        </View>
      </View>


      

      
    </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black'
    },
    section:{
      padding:20,
      justifyContent:'space-between',
      backgroundColor:'#292929',
      height:120
    },
    searchbar:{
      flexDirection:'row',
      backgroundColor:'#191919',
      justifyContent:'space-between',
      borderRadius:10,
      borderWidth:1,
      borderColor:'#707070',
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
    words:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:17,
    },
    text:{
      color:'white',
      fontSize:20,
      fontWeight:'bold'
    },
    text1:{
      color:'#2AFD89',
      fontSize:12,
    },
    section1:{
      flexDirection:'row',
      backgroundColor:'black',
      borderBottomWidth:8,
      borderColor:'#292929'
    },
    picture:{
      height:100,
      marginLeft:20,
      justifyContent:'center',
    },
    pic1:{
      width:100,
      height:100,
    },
    inside:{
      flex:1,
      justifyContent:'center',
      marginLeft:10,
      marginRight:15
    },
    one:{
      color:'white',
      fontSize:13
    },
    two:{
      color:'grey',
      fontSize:12
    },
    two1:{
      color:'grey',
      fontSize:12,
      paddingRight:5,
    },
     twoassess:{
      color:'grey',
      fontSize:12,
    },
    two1assess:{
      color:'grey',
      fontSize:12,
      paddingRight:5,
    },
    part:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:5
    },
    part1:{
      flexDirection:'row'
    },
    pen:{
      width:20,
      height:20,
    },
    bold:{
      width:30,
      height:30
    },
    insidesec1:{
      flex:1,
      justifyContent:'space-between',
      marginLeft:10,
      marginRight:10,
      flexDirection:'row',
      alignItems:'center'
    },
    subhead:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#292929',
      height:60,
      alignItems:'center',
      paddingBottom:10
    },
    textsub:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
      marginLeft:20
    },
    textsub1:{
      color:'#2AFD89',
      fontSize:13,
      marginRight:20
    },
     one1:{
      color:'white',
      fontSize:13,
      marginBottom:10
    },
    part2:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10
    },
       
  
    
    
    
  
  });
  