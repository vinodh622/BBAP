import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Image, StyleSheet} from 'react-native';

import SplashScreen1 from './screen/SplashScreen1';
import SplashScreen2 from './screen/SplashScreen2';
import SplashScreen3 from './screen/SplashScreen3';
import SignUp from './screen/SignUp';
import SignUp1 from './screen/SignUp1';
import SignUp2 from './screen/SignUp2';
import SignUp3 from './screen/SignUp3';
import SignUp4 from './screen/SignUp4';
import CreatePassword from './screen/CreatePassword';
import LogIn from './screen/LogIn';
import Home from './screen/Home';
import VideoPreview from './screen/VideoPreview';
import VideoPreview1 from './screen/VideoPreview1';
import VideoPreview2 from './screen/VideoPreview2';
import Search from './screen/Search';
import Search1 from './screen/Search1';
import Forum from './screen/Forum';
import Forum1 from './screen/Forum1';
import Forum2 from './screen/Forum2';
import Forum3 from './screen/Forum3';
import Forum4 from './screen/Forum4';
import Forum5 from './screen/Forum5';
import Assessment from './screen/Assessment';
import Assessment1 from './screen/Assessment1';
import Assessment2 from './screen/Assessment2';
import Assessment3 from './screen/Assessment3';
import Profile from './screen/Profile';
import Tobtab from './screen/Toptab';
import Tobtab2 from './screen/Tobtab2';
import Toptab3 from './screen/Toptab3';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textTransform: 'none',
        },
        activeTintColor: '#2AFD89',
        inactiveTintColor: '#acacac',
        style: {
          paddingHorizontal: 5,

          backgroundColor: '#292929',
        },
        tabStyle: {
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={require('./image/userFoucsed.png')}
                style={styles.menuIcon}
              />
            ) : (
              <Image
                source={require('./image/user.png')}
                style={styles.menuIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={require('./image/userFoucsed.png')}
                style={styles.menuIcon}
              />
            ) : (
              <Image
                source={require('./image/user.png')}
                style={styles.menuIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Tobtab}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={require('./image/userFoucsed.png')}
                style={styles.menuIcon}
              />
            ) : (
              <Image
                source={require('./image/user.png')}
                style={styles.menuIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Assessment"
        component={Toptab3}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={require('./image/userFoucsed.png')}
                style={styles.menuIcon}
              />
            ) : (
              <Image
                source={require('./image/user.png')}
                style={styles.menuIcon}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={require('./image/userFoucsed.png')}
                style={styles.menuIcon}
              />
            ) : (
              <Image
                source={require('./image/user.png')}
                style={styles.menuIcon}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" headerMode="none">
        {/* <Stack.Screen name="SplashScreen1" component={SplashScreen1}/>
        <Stack.Screen name="SplashScreen2" component={SplashScreen2}/>
        <Stack.Screen name="SplashScreen3" component={SplashScreen3}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignUp1" component={SignUp1}/>
        <Stack.Screen name="SignUp2" component={SignUp2}/>
        <Stack.Screen name="SignUp3" component={SignUp3}/>
        <Stack.Screen name="SignUp4" component={SignUp4}/>
        <Stack.Screen name="CreatePassword" component={CreatePassword}/>
        <Stack.Screen name="LogIn" component={LogIn}/>  */}
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Tobtab2" component={Tobtab2} />

        <Stack.Screen name="Search1" component={Search1} />

        <Stack.Screen name="Forum1" component={Forum1} />
        <Stack.Screen name="Forum2" component={Forum2} />
        <Stack.Screen name="Forum3" component={Forum3} />
        <Stack.Screen name="Forum4" component={Forum4} />
        <Stack.Screen name="Forum5" component={Forum5} />

        <Stack.Screen name="Assessment1" component={Assessment1} />
        <Stack.Screen name="Assessment2" component={Assessment2} />
        <Stack.Screen name="Assessment3" component={Assessment3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menuIcon: {width: 19, height: 19},
});
