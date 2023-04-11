/* eslint-disable prettier/prettier */
import React from 'react';
import AuthLayout from '../../layouts/auth';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Button} from '../../components';
import {useNavigation} from '@react-navigation/native';

const WelcomeImage = require('../../assets/images/welcome.png');
const GoogleIcon = require('../../assets/images/icons/google.png');
const UserIcon = require('../../assets/images/icons/user.png');

const Welcome = () => {
  const navigation = useNavigation();

  const renderContent = () => {
    return (
      <>
        <Text style={styles.mainText}>Welcome</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <View style={styles.wrapBtn}>
          <Button
            title={'Continue with google'}
            icon={GoogleIcon}
            background={'#fff'}
          />
        </View>
        <Button title={'Create an account'} icon={UserIcon} />
      </>
    );
  };

  const handleOnChangePage = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthLayout
      bgImage={WelcomeImage}
      descFooter={'Already have an account ?'}
      mainFooter={'Login'}
      mainContent={renderContent()}
      onChangePage={handleOnChangePage}
    />
  );
};

export default Welcome;
