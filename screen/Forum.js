import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput} from 'react-native';








export default function Forum({navigation}) {
    return (
        <View style={styles.container}>
      <ScrollView>
      
      
   
        <View style={styles.section1}>
          <Text style={styles.textsec}>Trending Today</Text>
          <ScrollView horizontal>
          <View style={styles.business}>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/Car.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>BUSINESS</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/lib.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>SUCCESS</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/Group57.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>MANAGEMENT</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/Car.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>BUSINESS</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/lib.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>SUCCESS</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>

            <View style={styles.businesssection}>
              <ImageBackground  imageStyle={{ borderRadius: 6}}
                style={styles.busbackground}
                source={require('../image/Group57.png')}>
                <Image style={styles.buslogo}
                source={require('../image/Sessions-icon.png')}/>
                <Text style={styles.bustext}>MANAGEMENT</Text>
                <Text style={styles.bustext1}>SESSIONS</Text> 
              </ImageBackground>
            </View>
          </View>
          </ScrollView>
       </View>
    

       <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Entrepreneur Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>19h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>Firms in Japan's sharing economy turn virus crisis</Text>
       <Text style={styles.twotext}>into an Opportunity. Discuss.</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>5.7k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>579 </Text>
            <Image style={styles.up}
            source={require('../image/edit.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
          </View>
        </View>

       </View>

        <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Marketing Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>7h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>Are TikTok & Snapchat Effective Platforms for</Text>
       <Text style={styles.twotext}>Political Campaigns?</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>1.2k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>Live Discussion </Text>
            <Image style={styles.up}
            source={require('../image/messenger.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
          </View>
        </View>

       </View>


       <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Sales Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>2h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>What are some proven ways to use social proof to</Text>
       <Text style={styles.twotext}>increase your conversions?</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>1.2k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>776 </Text>
            <Image style={styles.up}
            source={require('../image/edit.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
          </View>
        </View>

       </View>

       <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Entrepreneur Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>19h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>Firms in Japan's sharing economy turn virus crisis</Text>
       <Text style={styles.twotext}>into an Opportunity. Discuss.</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>5.7k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>579 </Text>
            <Image style={styles.up}
            source={require('../image/edit.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
          </View>
        </View>

       </View>

        <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Marketing Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>7h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>Are TikTok & Snapchat Effective Platforms for</Text>
       <Text style={styles.twotext}>Political Campaigns?</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>1.2k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>Live Discussion </Text>
            <Image style={styles.up}
            source={require('../image/messenger.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
          </View>
        </View>

       </View>


       <View style={styles.section2}>
        <View style={styles.diff}>
          <Image style={styles.round}
          source={require('../image/p1.png')}/>
            <View>
              <Text style={styles.sec2text}>Sales Sessions</Text>
              <Text style={styles.sec2text1}>Created by Jane Doe</Text>
            </View>
          </View>
          <View style={styles.end}>
            <Image style={styles.threedot}
            source={require('../image/3dotHorz.png')}/>
            <Text style={styles.sec2text2}>2h Ago</Text>
          </View>
       </View>

       <Text style={styles.twotext}>What are some proven ways to use social proof to</Text>
       <Text style={styles.twotext}>increase your conversions?</Text>

       <View style={styles.section3}>
        <Image style={styles.pic1}
          source={require('../image/mask1.png')}/>
        
        <View style={styles.icons}>
          <View style={styles.logo}>
            <Image style={styles.up}
            source={require('../image/up-arrow.png')}/>
            <Text style={styles.rating}>1.2k</Text>
            <Image style={styles.up}
            source={require('../image/down-arrow.png')}/>
          </View>
         
          <View style={styles.logo}>
            <Text style={styles.rating}>776 </Text>
            <Image style={styles.up}
            source={require('../image/edit.png')}/>
          </View>

          <View style={styles.logo}>
            <Text style={styles.rating}>Share </Text>
            <Image style={styles.share}
            source={require('../image/share.png')}/>
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
    sectionword:{
      backgroundColor:'#2AFD89'
    },
    secwordinside:{
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
      section1:{
        padding:20,
        backgroundColor:'#292929'
      },
      textsec:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
      },
      business:{
        flexDirection:'row',
        marginTop:15,
      },
      businesssection:{
        width:100,
        height:120,
        marginRight:10
      },
      busbackground:{
        width:'100%',
        height:'100%',
      },
      buslogo:{
        width:30,
        height:30
      },
      bustext:{
        color:'white',
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        marginTop:50
      },
      bustext1:{
        color:'#2AFD89',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:12
      },
      section2:{
        flexDirection:'row',
        padding:20,
        backgroundColor:'black',
        justifyContent:'space-between'
      },
      round:{
        width:50,
        height:50
      },
      sec2text:{
        color:'#2AFD89',
        fontWeight:'bold',
        paddingLeft:10
      },
      sec2text1:{
        color:'grey',
        fontSize:12,
        paddingLeft:10
      },
      end:{
       alignItems:'flex-end'
      },
      threedot:{
        width:25,
        height:19,
        marginLeft:20
      },
      sec2text2:{
        color:'grey',
        fontSize:12,
      },
      diff:{
        flexDirection:'row'
      },
      twotext:{
        color:'white',
        paddingLeft:20
      },
      section3:{
        padding:20,
        borderBottomWidth:10,
        borderColor:'#292929'
      },
      pic1:{
        width:'100%',
        height:160
      },
      icons:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
      },
      up:{
        width:15,
        height:15,
      },
      rating:{
        color:'#2AFD89',
        fontSize:12
      },
      logo:{
        flexDirection:'row'
      },
      share:{
        width:15,
        height:16
      }
    
      
     
    
    
     
    });
    
