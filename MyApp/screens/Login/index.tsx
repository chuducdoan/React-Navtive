/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, TextInputCom, Switch} from '../../components';
import AuthLayout from '../../layouts/auth';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const LoginImage = require('../../assets/images/login.png');
const MailIcon = require('../../assets/images/icons/mail.png');
const LockIcon = require('../../assets/images/icons/lock.png');

const Login = () => {
  const [remember, setRemember] = useState(false);
  const navigation = useNavigation();

  const renderContent = () => {
    return (
      <>
        <Text style={styles.mainText}>Welcome back !</Text>
        <Text style={styles.description}>Sign in to your account</Text>
        <View style={styles.textInput}>
          <TextInputCom icon={MailIcon} placeholder="Email Address" />
        </View>
        <View style={styles.textInput}>
          <TextInputCom
            icon={LockIcon}
            placeholder="Enter password"
            password={true}
          />
        </View>
        <View style={styles.forgotPassword}>
          <View style={styles.rememberWrap}>
            <View>
              <Switch
                onValueChange={() => setRemember(prev => !prev)}
                value={remember}
              />
            </View>
            <Text style={styles.remember}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={styles.textForgotPass}>Forgot password</Text>
          </Pressable>
        </View>
        <Button title={'Login'} onPress={() => navigation.navigate('Root')} />
      </>
    );
  };

  return (
    <AuthLayout
      bgImage={LoginImage}
      descFooter={'Don’t have an account ?'}
      mainFooter={'Sign up'}
      mainContent={renderContent()}
      onChangePage={() => navigation.navigate('SignUp')}
    />
  );
};

export default Login;
