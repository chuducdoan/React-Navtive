import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './style';
import {Button} from '../../components';

const WelcomeImage = require('../../assets/images/welcome.png');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={WelcomeImage} />
      <View style={styles.wrapContent}>
        <Text style={styles.mainText}>Welcome</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
        <Button title={'Create an account'} />
        <View style={styles.footer}>
          <Text style={styles.textFooter}>Already have an account ?</Text>
          <Pressable>
            <Text style={styles.textLogin}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
