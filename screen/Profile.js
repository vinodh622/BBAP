import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Image style={styles.logo}resizeMode='contain'
            source={require('../image/ses.png')}/>
          </View>
    
          <View style={styles.section1}>
            <Image style={styles.pic}
            source={require('../image/Sheldon.jpg')}/>
            <Text style={styles.word}>Sheldon Ong</Text>
            <Text style={styles.word1}>Co-Founder at Platinum Code</Text>
            <Text style={styles.word2}>BPP Law School Albar & Partners</Text>
            <Text style={styles.word2}>Kuala Lumpur, Malaysia 286 Connections</Text>
    
            <View style={styles.inside}>
              <View style={styles.one}>
                <Image style={styles.logo1}
                source={require('../image/messenger.png')}/>
                <Text style={styles.message}>Message</Text>
              </View>
    
              <View style={styles.two}>
                <Image style={styles.logo2}
                source={require('../image/users.png')}/>
                <Text style={styles.connect}>Connect</Text>
              </View>
            </View>
            
              <View style={styles.twotext}>
              <Text style={styles.two1}>Legal educated and trained with a passion for</Text>
                <View style={styles.separate}>
                  <Text style={styles.two1}>digital transformation</Text>
                  <Text style={styles.two2}>...more</Text>
                </View>
              </View>
          </View>
    
          <View style={styles.section2}>
    
            <Text style={styles.sec2text}>Activity</Text>
            <Text style={styles.sec2text1}>284 followers</Text>
    
            <View style={styles.tiksection}>
              <Image style={styles.tik}
              source={require('../image/Image11.png')}/>
              <View style={styles.tikwords}>
                <Text style={styles.tiktext}>Are Tiktok & Snapchat Effective Platforms</Text>
                <Text style={styles.tiktext}>for Political Campaigns?- BFM:: General</Text>
                <Text style={styles.tiktext1}>Sheldon Ong commented on this</Text>
              </View>
            </View>
          </View>
    
          <Text style={styles.seeall}>See All</Text>
    
          <View style={styles.section2}>
            <Text style={styles.sec2text}>Experience</Text>
    
            <View style={styles.tiksection}>
              <Image style={styles.tik}resizeMode='contain'
              source={require('../image/pcode.png')}/>
              
    
              <View style={styles.tikwords}>
                <Text style={styles.sec3text}>Co-Founder</Text>
                <Text style={styles.tiktext}>Platinum Code</Text>
                <Text style={styles.tiktext}>Dec 2019 - Present 11 mos</Text>
                <View style={styles.textcolor}>
                  <Text style={styles.tik1text1}>Kuala Lumpur, Federal Territory of kuala Lumpur,</Text>
                  <Text style={styles.tik1text1}>Malaysia</Text>
                </View>
    
                 <Text style={styles.tiktext}>In charge of overseeing the overall day-to</Text>
                 <Text style={styles.tiktext}>day management of Platinum Code and </Text>
                 <Text style={styles.tiktext}>related companies.</Text>
              </View>
            </View>
          </View>
    
          <Text style={styles.seeall}>See More</Text>
    
          <View style={styles.section2}>
            <Text style={styles.sec2text}>Education</Text>
    
            <View style={styles.tiksection}>
              <Image style={styles.tik}
              source={require('../image/bpp.jpg')}/>
              
    
              <View style={styles.tikwords}>
                <Text style={styles.sec3text}>BPP Law School</Text>
                <Text style={styles.tiktext}>Bar Professional Training Course (BPTC)</Text>
                <Text style={styles.tiktext}>Law</Text>
                <View style={styles.textcolor}>
                  <Text style={styles.tik1text1}>2015-2016</Text>
                 
                </View>
    
                 <Text style={styles.tiktext}>Grade: VC</Text>
                 <Text style={styles.tiktext}>Activities and societies:</Text>
                 <Text style={styles.tiktext}>The Great Legal Bak Charity on behalf of</Text>
                 <Text style={styles.tiktext}>BPP University, London</Text>
                 <Text style={styles.tiktext}>The Legal Walk,Charity Event on behalf</Text>
                 <Text style={styles.tiktext}>of BPP University, London</Text>
              </View>
            </View>
          </View>
    
          <Text style={styles.seeall}>See More</Text>
    
          <View style={styles.section2}>
            <Text style={styles.sec2text}>Skills</Text>
    
            <View style={styles.backword}>
              <Text style={styles.backtext}>Teamwork</Text>
              <Text style={styles.backtext}>Research</Text>
              <Text style={styles.backtext}>Sales</Text>
            </View>
            <View style={styles.backword}>
              <Text style={styles.backtext}>Social Media</Text>
              <Text style={styles.backtext}>Legal Research</Text>
            </View>
            <View style={styles.backword}>
              <Text style={styles.backtext}>Meditation</Text>
              <Text style={styles.backtext}>Human Rights</Text>
            </View>
            <View style={styles.backword}>
              <Text style={styles.backtext}>Legal Writing</Text>
              <Text style={styles.backtext}>Communications</Text>
            </View>
            <View style={styles.backword}>
              <Text style={styles.backtext}>Legal Marketing</Text>
            </View>
    
          </View>
    
          <Text style={styles.seeall}>See More</Text>
    
          <View style={styles.section2}>
            <Text style={styles.sec2text}>Accomplishments</Text>
    
            <View style={styles.tiksection}>
              <Text style={styles.acctext}>2</Text>
              
    
              <View style={styles.tikwords}>
                <Text style={styles.sec3text}>Certifications</Text>
                <Text style={styles.tiktext}>Bar Professional Training Course (BPTC)</Text>
                
                <View style={styles.textcolor}>
                  <Text style={styles.tik1text1}>The Honourable Society of Lincoln's Inn</Text>
                </View>
    
                 <Text style={styles.tiktext}>ADR Group Accredited Civil & Commerical</Text>
                 <Text style={styles.tiktext}>Mediator</Text>
                 <Text style={styles.tik1text1}>ADR Group</Text>
               
              </View>
            </View>
          </View>
    
          <Text style={styles.seeall}>See More</Text>
    
          <View style={styles.section2}>
            <Text style={styles.sec2text}>Contact</Text>
    
            <View style={styles.tiksection}>
              <View style={styles.tikwords1}>
                <Text style={styles.sec3text}>LinkedIn</Text>
                <Text style={styles.tiktext}>www.https://www.linkedin.com/in/</Text>
                <Text style={styles.tiktext}>platinumcodesheldon</Text>
                
              </View>
            </View>
          </View>
    
    
           
    
        </ScrollView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'black'
       },
       section:{
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#2AFD89'
       },
       logo:{
         width:150,
         height:150
       },
       section1:{
        backgroundColor:'black',
        padding:20,
        borderColor:'#292929',
        borderBottomWidth:10,
        
       },
       pic:{
         width:100,
         height:100,
         borderRadius:50,
         borderColor:'#2AFD89',
         borderWidth:4,
         position:'absolute',top:-50,left:20
       },
       word:{
         color:'#2AFD89',
         fontWeight:'bold',
         fontSize:18,
         marginBottom:10,
         marginTop:50
       },
       word1:{
          color:'#2AFD89',
          marginBottom:10,
       },
       word2:{
         color:'white',
       },
       inside:{
         flexDirection:'row',
         borderColor:'#2AFD89',
         borderBottomWidth:1,
       },
       one:{
        flexDirection:'row',
        borderColor:'#2AFD89',
        borderWidth:1,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:8,
        height:30,
        paddingVertical:4,
        marginTop:15,
        marginBottom:20
       },
       logo1:{
         width:20,
         height:20,
       },
       message:{
         color:'#2AFD89',
         marginLeft:10,
         fontWeight:'bold'
       },
       two:{
          flexDirection:'row',
          borderColor:'#2AFD89',
          borderWidth:1,
          paddingLeft:15,
          paddingRight:15,
          borderRadius:8,
          height:30,
          paddingVertical:4,
          marginTop:15,
          backgroundColor:'#2AFD89',
          marginLeft:15
       },
       logo2:{
         width:20,
         height:20,
       },
       connect:{
         color:'black',
         marginLeft:10,
         fontWeight:'bold'
       },
       twotext:{
         marginTop:10
       },
       two1:{
         color:'white'
       },
       separate:{
         flexDirection:'row',
         justifyContent:'space-between'
       },
       two2:{
         color:'#2AFD89',
       },
       section2:{
         padding:20,
         borderBottomWidth:4,
         borderColor:'#2AFD89',
         backgroundColor:'black'
       },
       sec2text:{
         color:'#2AFD89',
         fontWeight:'bold'
       },
       sec2text1:{
         color:'grey',
         fontSize:12,
         marginTop:5
       },
       tiksection:{
         flexDirection:'row',
         marginTop:20,
       },
       tik:{
         width:75,
         height:60,
         borderRadius:10,
       },
       tikwords:{
          marginLeft:15
       },
       tiktext:{
         color:'white'
       },
       tiktext1:{
         color:'grey',
         fontSize:12,
         paddingVertical:5,
       },
       seeall:{
         color:'#2AFD89',
         textAlign:'center',
         height:50,
         borderBottomWidth:10,
         borderBottomColor:'#292929',
         paddingVertical:10
       },
       sec3text:{
         color:'#2AFD89',
         fontWeight:'bold',
         marginBottom:10
       },
       textcolor:{
         marginBottom:10,
         marginTop:10
       },
        tik1text1:{
         color:'grey',
         fontSize:12,
       },
       backword:{
         flexDirection:'row',
       },
       backtext:{
         color:'black',
         backgroundColor:'white',
         height:30,
         paddingLeft:15,
         paddingRight:15,
         borderRadius:15,
         paddingVertical:4,
         fontWeight:'bold',
         marginTop:10,
         marginRight:10
       },
       acctext:{
         color:'#2AFD89',
         paddingLeft:30,
         paddingRight:30,
         height:60,
         fontWeight:'bold',
         fontSize:18,
       },
       tikwords1:{
         marginLeft:85
       }
    
      
      
      
     
    });
       
