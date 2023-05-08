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
import {HeaderSecondary, HeaderThirt} from './components';
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
import CategorieDetail from './screens/CategorieDetail';
import Cart from './screens/Cart';
import Filter from './screens/Filter';
import ForgotPassword from './screens/ForgotPassword';
import VerifyNumber from './screens/VerifyNumber';
import ShippingMethod from './screens/ShippingMethod';
import ShippingAddress from './screens/ShippingAddress';
import {Provider as PaperProvider} from 'react-native-paper';
import PaymentMethod from './screens/PaymentMethod';
import OrderSuccess from './screens/OrderSuccess';
import TrackOrder from './screens/TrackOrder';
import Reviews from './screens/Reviews';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WriteReviews from './screens/WriteReviews';

const BackArrowIcon = require('./assets/images/icons/backArrow.png');
const BackArrowIcon2 = require('./assets/images/icons/backArrow2.png');
const filterBlackIcon = require('./assets/images/icons/filterBlack.png');
const ReloadIcon = require('./assets/images/icons/reload.png');

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Detail">
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
                shadowColor: 'red',
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
                elevation: 2,
                shadowColor: 'red',
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
                elevation: 2,
                shadowColor: 'red',
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
              headerTransparent: true,
              header: props => <HeaderSecondary {...props} />,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Categories}
            options={({navigation}) => ({
              title: 'Categories',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Filter')}>
                  <Image source={filterBlackIcon} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="CategoryDetail"
            component={CategorieDetail}
            options={({navigation, route}: any) => ({
              title: route.params.title,
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Filter')}>
                  <Image source={filterBlackIcon} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation}) => ({
              title: 'Shopping Cart',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Filter"
            component={Filter}
            options={({navigation}) => ({
              title: 'Apply Filters',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Filter')}>
                  <Image source={ReloadIcon} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={({navigation}) => ({
              title: 'Password Recovery',
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="VerifyNumber"
            component={VerifyNumber}
            options={({navigation}) => ({
              title: 'Verify Number',
              headerTitleAlign: 'center',
              headerTransparent: true,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ShippingMethod"
            component={ShippingMethod}
            options={({navigation}) => ({
              title: 'Shipping Method',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ShippingAddress"
            component={ShippingAddress}
            options={({navigation}) => ({
              title: 'Shipping Address',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="PaymentMethod"
            component={PaymentMethod}
            options={({navigation}) => ({
              title: 'Payment Method',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="OrderSuccess"
            component={OrderSuccess}
            options={({navigation}) => ({
              title: 'Order Success',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="TrackOrder"
            component={TrackOrder}
            options={({navigation}) => ({
              title: 'Track Order',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Reviews"
            component={Reviews}
            options={({navigation}) => ({
              title: 'Reviews',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('WriteReviews')}>
                  <AntDesign name="pluscircleo" size={20} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="WriteReviews"
            component={WriteReviews}
            options={({navigation}) => ({
              title: 'Write Reviews',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#fff',
                height: 200,
              },
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Image source={BackArrowIcon2} />
                </Pressable>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
