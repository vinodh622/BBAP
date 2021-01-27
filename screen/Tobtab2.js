import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import VideoPreview from '../screen/VideoPreview';
import VideoPreview1 from '../screen/VideoPreview1';
import VideoPreview2 from '../screen/VideoPreview2';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Toptab2() {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <View style={styles.section1}>
        <ImageBackground
          style={styles.back}
          source={require('../image/Group57.png')}>
          <ImageBackground
            style={styles.round}
            source={require('../image/Ellipse37.png')}>
            <Image
              style={styles.inside}
              resizeMode="contain"
              source={require('../image/ArrowRight2.png')}
            />
          </ImageBackground>
        </ImageBackground>
      </View>

      <View>
        <Text style={styles.title}>Introduction to success</Text>

        <View style={styles.logo}>
          <View style={styles.iconone}>
            <Image
              style={styles.one}
              source={require('../image/IconlyLightHeart.png')}
            />
            <Image
              style={styles.one}
              source={require('../image/IconlyLightBookmark.png')}
            />
            <Image
              style={styles.one}
              resizeMode="contain"
              source={require('../image/Group431.png')}
            />
          </View>
          <View style={styles.icontwo}>
            <Image
              style={styles.two}
              source={require('../image/IconlyLightDownlaod.png')}
            />
          </View>
        </View>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            textTransform: 'none',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#acacac',
          style: {
            backgroundColor: '#000',
          },

          indicatorStyle: {
            backgroundColor: '#FFF',
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
          },
        }}>
        <Tab.Screen name="Overview" component={VideoPreview} />
        <Tab.Screen name="Contents" component={VideoPreview1} />
        <Tab.Screen name="Disscussion" component={VideoPreview2} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    width: 20,
    height: 25,
  },
  back: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 2,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 18,
  },
  logo: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  iconone: {
    flexDirection: 'row',
  },
  one: {
    width: 25,
    height: 25,
    marginRight: 35,
  },
  two: {
    width: 25,
    height: 25,
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  threewords: {
    height: 60,
    justifyContent: 'flex-end',
    borderTopWidth: 12,
    borderTopColor: '#292929',
    borderBottomWidth: 10,
    borderBottomColor: '#292929',
    marginTop: 10,
  },
  text3: {
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 13,
    marginTop: 10,
    marginBottom: 8,
  },
  text4: {
    color: 'white',
    fontSize: 13,
    marginLeft: 20,
  },
  instructor: {
    height: 120,
    borderTopColor: '#292929',
    borderBottomColor: '#292929',
    borderBottomWidth: 8,
    borderTopWidth: 8,
    marginTop: 20,
  },
  text5: {
    color: 'grey',
    marginLeft: 20,
    marginTop: 10,
  },
  insimagesection: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  ro1image: {
    width: 50,
    height: 50,
  },
  james: {
    color: 'white',
    marginLeft: 20,
    paddingVertical: 15,
    fontSize: 12,
  },
  text6: {
    color: 'grey',
    marginLeft: 20,
    fontSize: 13,
    marginTop: 10,
  },
  teamworksection: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  teamwork: {
    color: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
    marginRight: 15,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
