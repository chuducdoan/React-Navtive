/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from '../../screens/Account';
import Home from '../../screens/Home';
import Favorite from '../Favorite';
import {styles} from './style';

const CartIcon = require('../../assets//images/icons/cart.png');

const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#040404',
          tabBarInactiveTintColor: '#868889',
          tabBarStyle: {
            paddingRight: 124,
            height: 64,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="hearto" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>

      <TouchableOpacity style={styles.wrapBtnCard}>
        <View style={styles.innerCard}>
          <Image source={CartIcon} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Root;
