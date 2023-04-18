/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Step} from '../../components';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const ShippingMethod = () => {
  const [active, setActive] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Step step={1} />
      <View style={styles.wrapDelivery}>
        <TouchableOpacity
          style={[styles.box, active === 1 ? styles.boxActive : null]}
          onPress={() => setActive(1)}>
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
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, active === 2 ? styles.boxActive : null]}
          onPress={() => setActive(2)}>
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
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, active === 3 ? styles.boxActive : null]}
          onPress={() => setActive(3)}>
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
        </TouchableOpacity>
      </View>
      <Button
        title={'Next'}
        style={{width: '100%'}}
        onPress={() => navigation.navigate('ShippingAddress')}
      />
    </View>
  );
};

export default ShippingMethod;
