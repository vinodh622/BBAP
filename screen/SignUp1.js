import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity, Button } from 'react-native';




export default function SignUp1({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.section1}>

        <View style={styles.textinside}>
          <Text style={styles.text1}>Enter Verification Code</Text>
          <Text style={styles.text2}>Your verification code is sent by sms to:</Text>
        </View>

        <View style={styles.inputsection}>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          <TextInput 
            maxLength={1}
            keyboardType='numeric'
            style={styles.input}/>
          </View>
    
        <Text style={styles.text3}>Resend TAC</Text>

      </View>
    
 
      <TouchableOpacity onPress={()=>navigation.navigate('SignUp2')}
      style={styles.section2}>
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
     
      

      <View style={styles.section3}>
        <Text style={styles.signup}>Or Sign up with</Text>

         <View style={styles.socialmedia}>
            <View style={styles.fb}>
              <Image style={styles.fbicon}
              source={require('../image/fbicon.png')}/>
            </View>
                
            <View style={styles.google}>
              <Image style={styles.googleicon}
              source={require('../image/Gicon.png')}/>
            </View>

            <View style={styles.apple}>
              <Image style={styles.appleicon}
              source={require('../image/appleicon.png')}/>
            </View>

            <View style={styles.apple}>
              <Image style={styles.appleicon}
              source={require('../image/mesicon.png')}/>
            </View>
          </View>

          <Text style={styles.endtext1}>Already have an account?
          <Text style={styles.endtext2}> LOG IN</Text></Text>
      </View>

     

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  section1:{
    flex:2,
    alignItems:'center',
    justifyContent:'flex-end',
  },
  textinside:{
    width:'80%',
    marginBottom:20, 
  },
  text1:{
    color:'#2AFD89',
    fontWeight:'bold',
    fontSize:16,
    marginBottom:20
  },
  text2:{
    color:'#FFFFFF',
    fontSize:16,
  },
  inputsection:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'space-between',
    alignItems:'center',

  },
  input:{
    color:'white',
    borderBottomWidth:1,
    borderColor:'white',
    width:35,
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:30
  },
  text3:{
    color:'white',
    fontWeight:'bold',
    marginBottom:20,
    marginTop:20
  },
  section2:{
    flex:1,
    alignItems:'center',
  },
  next:{
    color:'#2AFD89',
    width:'80%',
    textAlign:'center',
    borderWidth:1,
    borderColor:'#2AFD89',
    height:45,
    borderRadius:10,
    paddingVertical:10,
    fontWeight:'bold',
    marginTop:15
  },
  section3:{
    flex:1,
    justifyContent:'space-evenly',

  },
  signup:{
    color:'#ACACAC',
    textAlign:'center',
  },
  socialmedia:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginLeft:25,
    marginRight:25,
    marginBottom:15
  },
   fb:{
    width:55,
    height:55,
    backgroundColor:'#2B6DFF',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  fbicon:{
    height:23,
    width:12
  },
  google:{
    width:55,
    height:55,
    backgroundColor:'#E74233',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  googleicon:{
    height:23,
    width:22
  },
  apple:{
    width:55,
    height:55,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  appleicon:{
    height:28,
    width:24
  },
   endtext1:{
    color:'#2AFD89',
    textAlign:'center', 
  },
  endtext2:{
    fontWeight:'bold',
    borderBottomWidth:1,
    borderBottomColor:'#2AFD89',
  },
  
  
});
