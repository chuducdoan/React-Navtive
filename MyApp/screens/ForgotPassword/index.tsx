/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './style';
import {Button, TextInputCom} from '../../components';

const MailIcon = require('../../assets/images/icons/mail.png');

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <TextInputCom placeholder={'Email Address'} icon={MailIcon} />
        <Button title={'Send link'} style={styles.btn} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
