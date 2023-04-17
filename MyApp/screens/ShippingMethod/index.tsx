/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {Button, Step} from '../../components';
import {styles} from './style';

const ShippingMethod = () => {
  return (
    <View style={styles.container}>
      <Step step={1} />
      <View style={styles.wrapDelivery}>
        <View style={styles.box}>
          <View style={styles.boxLeft}>
            <Text style={styles.title}>Standard Delivery</Text>
            <Text style={styles.desc}>
              Order will be delivered between 3 - 4 business days straights to
              your doorstep.
            </Text>
          </View>
          <View style={styles.boxRight}>
            <Text style={styles.price}>$3</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxLeft}>
            <Text style={styles.title}>Next Day Delivery</Text>
            <Text style={styles.desc}>
              Order will be delivered between 3 - 4 business days straights to
              your doorstep.
            </Text>
          </View>
          <View style={styles.boxRight}>
            <Text style={styles.price}>$3</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxLeft}>
            <Text style={styles.title}>Nominated Delivery</Text>
            <Text style={styles.desc}>
              Order will be delivered between 3 - 4 business days straights to
              your doorstep.
            </Text>
          </View>
          <View style={styles.boxRight}>
            <Text style={styles.price}>$3</Text>
          </View>
        </View>
      </View>
      <Button title={'Next'} style={{width: '100%'}} />
    </View>
  );
};

export default ShippingMethod;
