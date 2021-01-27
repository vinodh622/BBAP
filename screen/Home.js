import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground,FlatList, ScrollView,TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
       <TouchableOpacity onPress={()=>navigation.navigate('Tobtab2')}>
       <ImageBackground source={require('../image/blackpic.jpg')}  style={{height:550, width:'100%'}}>
        <View style={styles.header}>
      
          <Image style={styles.logo}
          source={require('../image/Sessions-icon.png')}/>
          <Text style={styles.headertext}>Trending</Text>
          <Text style={styles.headertext}>Discover</Text>
          <Text style={styles.headertext}>My List</Text>
        </View>

       <View style={styles.section}>
          <View style={styles.content}>
            <Text style={styles.contenttext}>BUSINESS</Text>
            <Text style={styles.contenttext}>& BEYOND</Text>
          </View>

          <View style={styles.play}>
            <View style={styles.plus}>
              <Image style={styles.plusicon}
              source={require('../image/plusicon.png')}/>
              <Text style={styles.mylist}>My List</Text>
            </View>

            <View style={styles.pause}>
              <Image style={styles.pauselogo}resizeMode='contain'
              source={require('../image/ArrowRight2.png')}/>
              <Text style={styles.textplay}>PLAY</Text>
            </View>

            <View style={styles.plus}>
              <Image style={styles.plusicon} source={require('../image/info.png')} />
              <Text style={styles.mylist}>Info</Text>
            </View>
          </View>
        
        </View>
        </ImageBackground>
        </TouchableOpacity>

        <View style={styles.section1}>
        <Text style={styles.preview}>Previews</Text>

        <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={[
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "name": "BUSINESS",
            "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "name": "MANAGEMENT",
             "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "name": "BUSINESS",
            "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "name": "MANAGEMENT",
             "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "name": "MANAGEMENT",
             "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "name": "MANAGEMENT",
             "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "name": "BUSINESS",
            "name1": "INSIDER"
        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "name": "MANAGEMENT",
             "name1": "INSIDER"
        },
        ]}
        renderItem= {({item})=>
          <View style={styles.round}>
            <View>
              <Image style={styles.roundpic} source={{uri:item.photo}}/>
              <Text style={styles.roundtext}>{item.name}</Text>
              <Text style={styles.roundtext}>{item.name1}</Text>
            </View>
          </View>
        }/>

      </View>


      <View style={styles.section2}>
        <Text style={styles.continue}>Continue Watching</Text>

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

      <View style={styles.section3}>
        <Text style={styles.texthead}>Popular on Beyond Business </Text>
      
      <FlatList horizontal
      showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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

      <View style={styles.section4}>
        <Text style={styles.texthead}>Top 10 in Malaysia Today</Text>

      <FlatList horizontal
      data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",
            "no":"1",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",
            "no":"2",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "MANAGEMENT",
            "no":"3",
        },
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/3e01922470fb9207da223ac7a8b29c91",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",
            "no":"4",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",
            "no":"5",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "MANAGEMENT",
            "no":"6",
        },
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",
            "no": "7",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",
            "no":"8",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/e28961d9ccf40d419bc39c5fcd9d7292",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "MANAGEMENT",
            "no": "9",
        },
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/3e01922470fb9207da223ac7a8b29c91",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",
            "no":"10",

        },
        ]}
      renderItem={({item}) => 
      
        <View style={styles.top10}>
          <View style={styles.top10section}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={styles.busbackground}
              source={{uri:item.photo}}>

              <Image style={styles.toplogo}
              source={{uri:item.photo1}}/>

              <Text style={styles.toptext}>{item.name}</Text>
              <Text style={styles.toptext1}>{item.name1}</Text>
          
              <Text style={styles.no}>{item.no}</Text>
            </ImageBackground>
          </View>
        </View>
      }/>
    </View>

    <View style={styles.section3}>
        <Text style={styles.texthead}>Trending Now</Text>
      
      <FlatList horizontal
      showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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

      
      <View style={styles.section3}>
        <Text style={styles.texthead}>My List</Text>
      
      <FlatList horizontal
      showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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

      <View style={styles.section3}>
        <Text style={styles.texthead}>Money Course</Text>
      
      <FlatList horizontal
      showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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

      <View style={styles.section3}>
        <Text style={styles.texthead}>Management Courses</Text>
      
      <FlatList horizontal
      showsHorizontalScrollIndicator={false}
        data={[
        {   
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/ceabbf3af513871668ddda118031d9c2",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "BUSINESS",
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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
            "name1": "& BEYOND",

        },
        {
            "photo": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/44f8b28a2c79cbb02d168891460c3909",
            "photo1": "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/a527e8babcd1ce65c4568c667b3330fc",
            "name": "INTRODUCTION",
            "name1": "TO SUCCESS",

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

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
   },
   header:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     padding:20
   },
   logo:{
     width:50,
     height:50
   },
   headertext:{
     color:'white',
     fontWeight: '500',
   },
   section:{
    height:450,
    justifyContent:'flex-end'
  },
  content:{
    alignItems:'center',
    marginBottom:30,
  },
  contenttext:{
    color:'white',
    fontSize:30
  },
  play:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:25
  },
  plus:{
    alignItems:'center',
    marginRight:18
  },
  plusicon:{
    width:20,
    height:20,
  },
  mylist:{
    color:'white',
    fontSize:11
  },
  pause:{
    flexDirection:'row',
    backgroundColor:'#2AFD89',
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginRight:18
  },
  pauselogo:{
    width:15,
    height:15
  },
  textplay:{
    fontWeight:'bold',
    paddingLeft:5
  },
   preview:{
     color:'white',
     fontWeight:'bold',
     fontSize:18,
     marginLeft:10,
     marginBottom:15,
     marginTop:10
   },
   round:{
     flexDirection:'row',
     marginBottom:10
   },
   roundpic:{
     width:80,
     height:80,
     borderRadius:50,
     borderColor:'#2AFD89',
     borderWidth:2,
     marginLeft:20,
   },
   roundtext:{
     color:'white',
     textAlign:'center',
     fontWeight:'bold',
     fontSize:11,
     marginLeft:20,
     position:'relative',bottom:15
   },
   continue:{
     color:'white',
     fontWeight:'bold',
     fontSize:18,
     marginLeft:10,
     marginBottom:20
   },
   car: {
    flexDirection: 'row',
    marginBottom:10
  },
  carsection: {
    width:100,
    height:120,
    marginBottom:20,
    marginLeft:10,
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
  texthead:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    marginLeft:10,
    marginTop:20,
    marginBottom:10
  },
   business: {
    flexDirection: 'row',
  },
  businesssection: {
    width:100,
    height:120,
    marginLeft:10,
    marginBottom:10,
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
  top10: {
    flexDirection: 'row',
    marginTop:10
   
  },
  top10section: {
    width:140,
    height:150,
    marginLeft:22,
    marginBottom:10,
  },
  toplogo:{
    width:30,
    height:30,
  },
  toptext:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
    marginTop:70,
    paddingLeft:5
  },
   toptext1: {
    color: '#2AFD89',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    paddingLeft:5
  },
   no: {
    color: '#2AFD89',
    fontWeight: 'bold',
    fontSize:50,
    position:'relative',
    bottom:40,
    right:18,
  },
  



});


