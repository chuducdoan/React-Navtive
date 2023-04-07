/* eslint-disable prettier/prettier */
import React from 'react';
import AuthLayout from '../../layouts/auth';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from './style';
import {Button} from '../../components';
import TextInputCom from '../../components/TextInputCom';

const LoginImage = require('../../assets/images/login.png');
const MailIcon = require('../../assets/images/icons/mail.png');
const LockIcon = require('../../assets/images/icons/lock.png');

const Login = () => {
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
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotPassword}>
          <View>
            <Text style={styles.remember}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={styles.textForgotPass}>Forgot password</Text>
          </Pressable>
        </View>
        <Button title={'Login'} />
      </>
    );
  };

  return (
    <AuthLayout
      bgImage={LoginImage}
      descFooter={'Don’t have an account ?'}
      mainFooter={'Sign up'}
      mainContent={renderContent()}
    />
  );
};

export default Login;
