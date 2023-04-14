/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, HeaderSecondary, HeaderThirt} from './components';
import DefaultScreen from './screens/DefaultScreen';
import Login from './screens/Login';
import Root from './screens/Root';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import Detail from './screens/Detail';
import Categories from './screens/Categories';
import {Image, Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackArrowIcon = require('./assets/images/icons/backArrow.png');

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Default"
        // screenOptions={{
        //   header: props => <Header {...props} />,
        //   headerTransparent: true,
        // }}
      >
        <Stack.Screen
          name="Default"
          component={DefaultScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={({navigation}) => ({
            title: 'Welcome',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 2,
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 18,
              fontWeight: '500',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image source={BackArrowIcon} />
              </Pressable>
            ),
            headerShadowVisible: true,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({
            title: 'Welcome',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 18,
              fontWeight: '500',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image source={BackArrowIcon} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({navigation}) => ({
            title: 'Welcome',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 18,
              fontWeight: '500',
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Image source={BackArrowIcon} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: '',
            header: props => <HeaderSecondary {...props} />,
          }}
        />
        <Stack.Screen
          name="Category"
          component={Categories}
          options={{
            title: 'Categories',
            header: props => <HeaderThirt {...props} />,
            headerShown: true,
            headerTransparent: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
