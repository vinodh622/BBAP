import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';



export default function Forum2({navigation}) {
  return (
    <View style={styles.container}>
    
    
          



        <ScrollView>
         <View style={styles.words1}>
          <Text style={styles.textw1}>Your Sessions</Text>
          <Text style={styles.textw2}>See All</Text>
        </View>

      
        <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Entrepreneur Sessions</Text>
            <Text style={styles.sec2text1}>460 Members  98 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Marketing Sessions</Text>
            <Text style={styles.sec2text1}>776 Members  190 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

        
         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Sales Sessions</Text>
            <Text style={styles.sec2text1}>1.2k Members  542 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

         
         <View style={styles.words1}>
          <Text style={styles.textw1}>Popular Sessions</Text>
          <Text style={styles.textw2}>See All</Text>
        </View>
    

      
        <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Leadership Sessions</Text>
            <Text style={styles.sec2text1}>460 Members  98 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
        </View>

         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Marketing Sessions</Text>
            <Text style={styles.sec2text1}>776 Members  190 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

        
         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Business Ethics Sessions</Text>
            <Text style={styles.sec2text1}>1.2k Members  542 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
        </View>
        
        
        <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Leadership Sessions</Text>
            <Text style={styles.sec2text1}>460 Members  98 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
        </View>

         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Marketing Sessions</Text>
            <Text style={styles.sec2text1}>776 Members  190 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

        
         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Business Ethics Sessions</Text>
            <Text style={styles.sec2text1}>1.2k Members  542 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
        </View>

        
        <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Leadership Sessions</Text>
            <Text style={styles.sec2text1}>460 Members  98 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
        </View>

         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/lib.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Marketing Sessions</Text>
            <Text style={styles.sec2text1}>776 Members  190 online</Text>
            </View>
          </View>
            <Text style={styles.endtext}>Joined</Text>
        </View>

        
         <View style={styles.checking}>
          <View style={styles.section2}>
            <Image style={styles.one}
            source={require('../image/Car.png')}/>
            <View style={styles.section2text}>
            <Text style={styles.sec2text}>Business Ethics Sessions</Text>
            <Text style={styles.sec2text1}>1.2k Members  542 online</Text>
            </View>
          </View>
            <Text style={styles.endtext1}>Join</Text>
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
    justifyContent:'space-between',
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
  endtext:{
    color:'grey',
    marginRight:20,
    fontSize:12,
    borderColor:'#292929',
    borderWidth:1,
    borderRadius:5,
    paddingRight:5,
    paddingLeft:5
  },
   endtext1:{
    color:'#2AFD89',
    marginRight:20,
    fontSize:12,
    borderColor:'#292929',
    borderWidth:1,
    borderRadius:5,
    paddingRight:12,
    paddingLeft:12
  }
  
});
