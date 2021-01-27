import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Search({navigation}) {
    return (
    <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('Search1')}>
         <View style={styles.section}>
  
            <View style={styles.searchbar}>
              <View style={styles.searchin}>
                <Image style={styles.search}
                source={require('../image/Search.png')}/>
                <TextInput
                 placeholder='Search'
                 placeholderTextColor='#FFFFFF'

                style={styles.input}/>
              </View>
              <Image style={styles.group}
              source={require('../image/Group428.png')}/>
            </View>
  
            <View style={styles.words}>
              <Text style={styles.text}>Popular Videos</Text>
              <Text style={styles.text1}>See All</Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={styles.section1}>
        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/suitpic.jpg')}/>
        </View>

        <View  style={styles.insidesec1}>
          <View>
            <Text style={styles.one}>Introduction to Success</Text>
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
          source={require('../image/suitpic.jpg')}/>
        </View>

        <View  style={styles.insidesec1}>
          <View>
            <Text style={styles.one}>Business and Beyond</Text>
            <Text style={styles.two}>Robyn Benincasa</Text>
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
          source={require('../image/suitpic.jpg')}/>
        </View>

        <View  style={styles.insidesec1}>
          <View>
            <Text style={styles.one}>Robyn Benincasa</Text>
            <Text style={styles.two}>Jia Jiang</Text>
          </View>

          <View>
          <Image style={styles.bold}
          source={require('../image/Bold.png')}/>
          </View>
        </View>
      </View>
      
      <View style={styles.subhead}>
        <Text style={styles.textsub}>Recent Forums</Text>
        <Text style={styles.textsub1}>See All</Text>
      </View>
    


      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/suitpic.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Are TikTok & Snapchat Effective</Text>
          <Text style={styles.one}>Platforms for Political Camp...</Text>

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
          source={require('../image/suitpic.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Increase sales and sign ups by up to 15%</Text>
          <Text style={styles.one}>with Social Proof...</Text>

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

      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/suitpic.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Firms in Japan's sharing</Text>
          <Text style={styles.one}>economy turn virus crisis into....</Text>

          <View style={styles.part}>
            <Text style={styles.two}>13 Hours Ago</Text>
            <View style={styles.part1}>
              <Text style={styles.two1}>5.7k</Text>
              <Image style={styles.pen}
              source={require('../image/pen.png')}/>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.section1}>

        <View style={styles.picture}>
          <Image style={styles.pic1}
          source={require('../image/suitpic.jpg')}/>
        </View>

         <View  style={styles.inside}>
          <Text style={styles.one}>Are TikTok & Snapchat Effective</Text>
          <Text style={styles.one}>Platforms for Political Camp...</Text>

          <View style={styles.part}>
            <Text style={styles.two}>15 Hours Ago</Text>
            <View style={styles.part1}>
              <Text style={styles.two1}>12k</Text>
              <Image style={styles.pen}
              source={require('../image/pen.png')}/>
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
    search:{
      width:22,
      height:22,
      marginLeft:10,
      marginRight:10,
      marginTop:7
    },
    searchin:{
      flexDirection:'row'
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
        borderColor:'#424242'
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
      }
      
      
});