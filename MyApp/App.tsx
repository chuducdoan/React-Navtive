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
import {Header} from './components';
import DefaultScreen from './screens/DefaultScreen';
import Login from './screens/Login';
import Root from './screens/Root';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Default"
        screenOptions={{
          header: props => <Header {...props} />,
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="Default"
          component={DefaultScreen}
          options={{headerShown: false}}
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
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
});

export default App;
