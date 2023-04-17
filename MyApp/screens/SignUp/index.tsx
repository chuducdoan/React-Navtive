/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, TextInputCom} from '../../components';
import AuthLayout from '../../layouts/auth';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const SignUpImage = require('../../assets/images/signUp.png');
const MailIcon = require('../../assets/images/icons/mail.png');
const LockIcon = require('../../assets/images/icons/lock.png');
const PhoneIcon = require('../../assets/images/icons/telephone.png');

const SignUp = () => {
  const navigation = useNavigation();

  const renderContent = () => {
    return (
      <>
        <Text style={styles.mainText}>Create account</Text>
        <Text style={styles.description}>Quickly create account</Text>
        <View style={styles.textInput}>
          <TextInputCom icon={MailIcon} placeholder="Email Address" />
        </View>
        <View style={styles.textInput}>
          <TextInputCom icon={PhoneIcon} placeholder="Phone number" />
        </View>
        <View style={styles.textInput}>
          <TextInputCom
            icon={LockIcon}
            placeholder="Enter password"
            password={true}
          />
        </View>
        <View style={styles.wrapBtn}>
          <Button
            title={'Signup'}
            onPress={() => navigation.navigate('VerifyNumber')}
          />
        </View>
      </>
    );
  };

  return (
    <AuthLayout
      bgImage={SignUpImage}
      descFooter={'Already have an account ?'}
      mainFooter={'Login'}
      mainContent={renderContent()}
      onChangePage={() => navigation.navigate('Login')}
    />
  );
};

export default SignUp;
