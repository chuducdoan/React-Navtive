/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import {Button} from '../../components';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const CartImage = require('../../assets/images/bagLarge.png');

const OrderSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image source={CartImage} />
        <Text style={styles.mainTitle}>Your order was succesfull !</Text>
        <Text style={styles.subTitle}>
          You will get a response within a few minutes.
        </Text>
      </View>
      <Button
        title={'Track order'}
        style={styles.btn}
        onPress={() => navigation.navigate('TrackOrder')}
      />
    </View>
  );
};

export default OrderSuccess;
